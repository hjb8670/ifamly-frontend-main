
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { TranslateService } from '@ngx-translate/core';

const LNG_KEY = 'SELECTED_LANGUAGE';
const TRANSLATION_CACHE_KEY = 'TRANSLATION_CACHE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languages = [];
  selected = '';
  private apiKey = 'AIzaSyDrPqtPfXGYIBk_7O-xG4SST3-q5SNaGHU'; // 🔐 Add your API Key here
  private targetLang = 'en';
  private translationCache = new Map<string, string>();

  constructor(
    private translate: TranslateService,
    private http: HttpClient
  ) { }

  async setInitialAppLanguage() {
    let language = 'en'; // Fallback language
    try {
      // Ensure the translate service is initialized
      this.setLanguage(language);
      const savedLanguage = await this.getSavedLanguage();
      if (savedLanguage) {
        this.setLanguage(savedLanguage);
        this.selected = savedLanguage;
      } else {
         this.setLanguage(language);
      }
    } catch (error) {
      console.error("Error setting initial language", error);
      // Fallback to default language if any error occurs
        this.setLanguage(language);
    }
  }

  async getSavedLanguage() {
   
    const result = await Storage.get({ key: LNG_KEY });
    return result.value || '';  // Return saved language or empty string if not found
  }

 async setLanguage(lng: string) {
    this.translate.use(lng);  // Change the language dynamically
    await Storage.set({ key: LNG_KEY, value: lng });
  }

  async translateText(text: string): Promise<string> {
    const cacheKey = `${this.targetLang}-${text}`;
    if (this.translationCache.has(cacheKey)) {
      return this.translationCache.get(cacheKey)!;
    }

    const url = `https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`;
    const body = { q: text, target: this.targetLang };

    try {
      const res: any = await this.http.post(url, body).toPromise();
      const translatedText = res.data.translations[0].translatedText;
      this.translationCache.set(cacheKey, translatedText);
      return translatedText;
    } catch (err) {
      console.error('Translation error:', err);
      return text; // Return original text in case of error
    }
    
  }

  getLanguages() {
    return [
  { text: 'English', value: 'en', flag: '🇬🇧' },
  { text: '日本語', value: 'ja', flag: '🇯🇵' }, // Japanese
  { text: 'Español', value: 'es', flag: '🇪🇸' }, // Spanish
  { text: 'Français', value: 'fr', flag: '🇫🇷' }, // French
  { text: '한국어', value: 'ko', flag: '🇰🇷' }, // Korean
  { text: 'العربية', value: 'ar', flag: '🇸🇦' }, // Arabic
  { text: '中文 (Zhōngwén)', value: 'zh', flag: '🇨🇳' }, // Mandarin Chinese
  { text: '粵語 (Jyutping)', value: 'yue', flag: '🇭🇰' }, // Cantonese
  { text: '吴语 (Wúyǔ)', value: 'wuu', flag: '🇨🇳' }, // Shanghainese
  { text: 'Русский', value: 'ru', flag: '🇷🇺' }, // Russian
  { text: 'Português', value: 'pt', flag: '🇵🇹' }, // Portuguese
  { text: 'Nederlands', value: 'nl', flag: '🇳🇱' }, // Dutch
  { text: 'Deutsch', value: 'de', flag: '🇩🇪' }, // German
  { text: 'Italiano', value: 'it', flag: '🇮🇹' }, // Italian
  { text: 'Türkçe', value: 'tr', flag: '🇹🇷' }, // Turkish
  { text: 'हिन्दी', value: 'hi', flag: '🇮🇳' }, // Hindi
  { text: 'Svenska', value: 'sv', flag: '🇸🇪' }, // Swedish
  { text: 'Dansk', value: 'da', flag: '🇩🇰' }, // Danish
  { text: 'Norsk', value: 'no', flag: '🇳🇴' }, // Norwegian
  { text: 'Suomi', value: 'fi', flag: '🇫🇮' }, // Finnish
];

// return [
//   { text: 'English', value: 'en', flag: '🇬🇧' },
//   { text: '中文 (Zhōngwén)', value: 'zh', flag: '🇨🇳' }, // Mandarin Chinese
//   { text: 'Español', value: 'es', flag: '🇪🇸' },
//   { text: 'Français', value: 'fr', flag: '🇫🇷' },
//   { text: 'العربية', value: 'ar', flag: '🇸🇦' },
//   { text: 'Русский', value: 'ru', flag: '🇷🇺' },
//   { text: 'Português', value: 'pt', flag: '🇵🇹' },
//   { text: 'Nederlands', value: 'nl', flag: '🇳🇱' },
//   { text: 'Deutsch', value: 'de', flag: '🇩🇪' },
//   { text: '日本語', value: 'ja', flag: '🇯🇵' },
//   { text: '粵語 (Jyutping)', value: 'yue', flag: '🇭🇰' }, // Cantonese
//   { text: 'Italiano', value: 'it', flag: '🇮🇹' },
//   { text: '한국어', value: 'ko', flag: '🇰🇷' },
//   { text: '吴语 (Wúyǔ)', value: 'wuu', flag: '🇨🇳' }, // Shanghainese
//   { text: 'Türkçe', value: 'tr', flag: '🇹🇷' },
//   { text: 'हिन्दी', value: 'hi', flag: '🇮🇳' },
//   { text: 'Svenska', value: 'sv', flag: '🇸🇪' },
//   { text: 'Dansk', value: 'da', flag: '🇩🇰' },
//   { text: 'Norsk', value: 'no', flag: '🇳🇴' },
//   { text: 'Suomi', value: 'fi', flag: '🇫🇮' },
// ];

  }
}
