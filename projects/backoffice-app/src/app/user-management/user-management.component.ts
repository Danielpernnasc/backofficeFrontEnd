import { Component } from '@angular/core';
import { User } from '../model/User.model';
import { UserService } from '../services/user/user.service';


@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {
  users: User[] = [];
  modalVisible = false;
  currentUser: Partial<User> = {};

  constructor(private userService: UserService) {
    this.users = this.userService.list();
  }

  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.currentUser = {};
  }

  saveUser() {
    if (this.currentUser.id) {
      this.userService.update(this.currentUser as User);
    } else {
      this.userService.create(this.currentUser as Omit<User, 'id'>);
    }

    this.users = this.userService.list();
    this.closeModal();
  }

  deleteUser(id: number) {
    this.userService.delete(id);
    this.users = this.userService.list();
  }
}
