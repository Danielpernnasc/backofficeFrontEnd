import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiButtonComponent, UiTableComponent } from "../../../ui-lib/src/public-api";
import { DataService } from './services/data/data.service';
import { FormsModule } from '@angular/forms';
import { User } from './model/User.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UiButtonComponent,
    UiTableComponent,
    FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = "BackOffice";
  data: any[] = [];
  columns = ['id', 'nome', 'email', 'ações'];
  newUser: User = {
    id: null,
    nome: '',
    email: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.data = this.dataService.getAll();
  }

  addUser() {
    if (this.newUser.id === null) {
      this.newUser.id = this.data.length + 1;
      this.data.push(this.newUser);
    } else {
      const index = this.data.findIndex(u => u.id === this.newUser.id);
      this.data[index] = this.newUser;
    }
    this.dataService.save(this.data);
    this.newUser = { id: null, nome: '', email: '' };
  }

  onDelete(id: number) {
    this.data = this.data.filter(u => u.id !== id);
    this.dataService.save(this.data);
  }

  onEdit(user: any) {
    this.newUser = { ...user };
  }

}
