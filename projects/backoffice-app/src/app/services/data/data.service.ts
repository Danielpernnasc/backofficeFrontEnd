import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private storageKey = 'usuarios';

  getAll() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  save(item: any) {
    const data = this.getAll();
    data.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
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
