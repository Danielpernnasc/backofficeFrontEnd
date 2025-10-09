import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../model/User.model';
import { DataService } from '../services/data/data.service';
import { UiButtonComponent, UiTableComponent } from '../../../../ui-lib/src/public-api';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    UiButtonComponent,
    UiTableComponent,
    FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title = "BackOffice";
  data: any[] = [];
  columns = ['id', 'name', 'email'];
  newUser: User = {
    id: null,
    name: '',
    email: ''
  };

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadData();
  }

  onSubmit(form: NgForm): void {
    if (this.newUser.id) {
      // Se tiver ID, é update
      this.dataService.putUser(this.newUser.id, {
        name: this.newUser.name,
        email: this.newUser.email
      }).subscribe({
        next: () => this.loadData(),
        error: (err) => console.error(err),
        complete: () => {
          form.resetForm();
          this.newUser = { id: null, name: '', email: '' };
        }
      });
    } else {
      // Se não tiver ID, é criação
      this.dataService.postUser({
        id: null,
        name: this.newUser.name,
        email: this.newUser.email
      }).subscribe({
        next: () => this.loadData(),
        error: (err) => console.error(err),
        complete: () => {
          form.resetForm();
          this.newUser = { id: null, name: '', email: '' };
        }
      });
    }
  }




  loadData() {
    this.dataService.getUsers().subscribe(users => {
      this.data = Array.isArray(users) ? users : [];
    });
  }



  onEdit(user: User) {
    if (user.id !== null) {
      this.newUser = { ...user };
      this.dataService.putUser(user.id, { name: user.name, email: user.email })
        .subscribe(response => {
          console.log(response);
          this.loadData();
        });
    } else {
      console.error('User ID is null. Cannot update user.');
    }
  }

  onDelete(id: number) {
    this.dataService.deleteUser(id).subscribe(response => {
      console.log(response);
      this.loadData();
    });
  }



  onLogout() {
    this.router.navigate(['/login']);
  }
}
