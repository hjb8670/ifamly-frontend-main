import { TranslateLoader } from '@ngx-translate/core';
import { Observable, from, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import enText from '../../assets/i18n/en.json';

export class GoogleTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  private apiKey = 'AIzaSyDrPqtPfXGYIBk_7O-xG4SST3-q5SNaGHU';

  getTranslation(lang: string): Observable<any> {
    if (lang === 'en') {
      return from(Promise.resolve(enText));
    }

    // ✅ Check localStorage cache
    const cached = localStorage.getItem(`translation_${lang}`);
    if (cached) {
      console.log(JSON.parse(cached));
      console.log(`[CACHE] Loaded ${lang} translations from localStorage`);
      return from(Promise.resolve(JSON.parse(cached)));
    }

    const flattened = this.flattenObject(enText);
    const keys = Object.keys(flattened);
    const values = Object.values(flattened);

    const requests = values.map((text: string) => {
      const url = `https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`;
      const body = {
        q: text,
        source: 'en',
        target: lang,
        format: 'text',
        model: 'nmt'
      };
      return this.http.post<any>(url, body);
    });

    return new Observable(observer => {
      forkJoin(requests).subscribe({
        next: responses => {
          const translatedTexts = responses.map(r => r.data.translations[0].translatedText);
          const translatedObj = this.unflattenObject(keys, translatedTexts);
          
          // 🧠 Save to localStorage
          localStorage.setItem(`translation_${lang}`, JSON.stringify(translatedObj));
          console.log(`[CACHE] Saved ${lang} translations to localStorage`);

          observer.next(translatedObj);
          observer.complete();
        },
        error: err => {
          console.error('[Translation API Error]', err);
          observer.error(err);
        }
      });
    });
  }

  private flattenObject(obj: any, parentKey = '', result: any = {}) {
    for (let key in obj) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === 'object') {
        this.flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
    return result;
  }

  private unflattenObject(keys: string[], values: string[]) {
    const result: any = {};
    keys.forEach((key, index) => {
      const parts = key.split('.');
      let current = result;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (i === parts.length - 1) {
          current[part] = values[index];
        } else {
          current[part] = current[part] || {};
          current = current[part];
        }
      }
    });
    return result;
  }
}
