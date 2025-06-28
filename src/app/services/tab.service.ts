import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private currentTabSubject = new BehaviorSubject<string>('discover');
  currentTab$ = this.currentTabSubject.asObservable();

  constructor() { }

  setActiveTab(tab: string) {
    this.currentTabSubject.next(tab);
  }

  getCurrentTab(): string {
    return this.currentTabSubject.value;
  }
} 