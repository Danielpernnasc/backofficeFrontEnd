import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private storageKey = 'usuarios';

  getAll() {
    if (typeof localStorage !== 'undefined') {
      const data = localStorage.getItem('users');
      return data ? JSON.parse(data) : [];
    }
    return [];
  }


  save(data: any[]) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('users', JSON.stringify(data));
    }
  }

  update(index: number, item: any) {
    const data = this.getAll();
    data[index] = item;
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  delete(index: number) {
    const data = this.getAll();
    data.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
}
