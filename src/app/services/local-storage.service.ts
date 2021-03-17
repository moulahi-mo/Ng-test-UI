import { Injectable } from '@angular/core';
import { LikesFeed } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  public setToLocalStorage(item: string, likes: LikesFeed[]) {
    localStorage.setItem(`${item}`, JSON.stringify(likes));
  }

  public getFromLocalStorage(item: string) {
    if (localStorage.getItem(item)) {
      return JSON.parse(localStorage.getItem(item));
    } else {
      return [];
    }
  }

  public removeFromLocalStorage(item: string) {
    localStorage.removeItem(item);
  }

  public clearLocalStorage() {
    localStorage.clear();
  }
}
