import { Injectable } from '@angular/core';
import { DiscoverUsr } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DiscoverStateService {
  private cardListKey = 'discover_card_list';
  private cardIndexKey = 'discover_card_index';

  setCardList(list: DiscoverUsr[]) {
    localStorage.setItem(this.cardListKey, JSON.stringify(list));
  }

  getCardList(): DiscoverUsr[] {
    const data = localStorage.getItem(this.cardListKey);
    return data ? JSON.parse(data) : [];
  }

  setLastCardIndex(index: number) {
    localStorage.setItem(this.cardIndexKey, index.toString());
  }

  getLastCardIndex(): number {
    const data = localStorage.getItem(this.cardIndexKey);
    return data ? parseInt(data, 10) : 0;
  }

  clear() {
    localStorage.removeItem(this.cardListKey);
    localStorage.removeItem(this.cardIndexKey);
  }
} 