// translate.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';

@Pipe({ name: 'translate', pure: false })
export class TranslatePipe implements PipeTransform {
  private translated = '';
  private lastValue = '';
  private lastLang = '';

  constructor(private translationService: TranslationService) {}

  transform(value: string, targetLang: string = 'ur'): string {
    if (!value || value === this.lastValue && targetLang === this.lastLang) return this.translated;

    this.lastValue = value;
    this.lastLang = targetLang;

    this.translationService.translate(value, targetLang).subscribe({
      next: res => {
        this.translated = res.data.translations[0].translatedText;
      },
      error: () => {
        this.translated = value; // fallback
      }
    });

    return this.translated || value;
  }
}
