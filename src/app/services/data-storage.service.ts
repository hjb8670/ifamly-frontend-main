import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage'


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }


  async set(key: string, value: string) {
    await Storage.set({
      key: key,
      value: value
    });
  }

  async get(key: string): Promise<string> {
    const { value } = await Storage.get({ key: key });
    return value;
  }

  async remove(key: string) {
    await Storage.remove({ key: key });
  }

}
