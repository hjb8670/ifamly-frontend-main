// translation.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private apiKey = 'AIzaSyDrPqtPfXGYIBk_7O-xG4SST3-q5SNaGHU';
 
  constructor(private http: HttpClient) {}

 translate(text: string, targetLang: string = 'ur') {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`;
  const body = {
    q: text,
    target: targetLang,
    format: 'text',
  };

  return this.http.post<any>(url, body); // ✅ key is in URL only
}
}
