import { Injectable } from '@angular/core';
import { User } from '../../model/User.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private users: User[] = [];
  private idCounter = 1;

  list(): User[] {
    return this.users;
  }
  create(user: Omit<User, 'id'>) {
    this.users.push({ ...user, id: this.idCounter++ });
  }

  update(user: User) {
    const idx = this.users.findIndex(u => u.id === user.id);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }

  delete(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }

}
