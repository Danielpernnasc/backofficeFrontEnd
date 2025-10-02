import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiButtonComponent, UiTableComponent } from "../../../ui-lib/src/public-api";
import { DataService } from './services/data/data.service';
import { FormsModule } from '@angular/forms';

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
  columns = ['id', 'nome', 'email'];
  data: any[] = [];
  newUser = { nome: '', email: '' };

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.data = this.dataService.getAll();
  }

  addUser() {
    if (!this.newUser.nome || !this.newUser.email) {
      return;
    }

    const id = this.data.length + 1;
    const newUser = { id, ...this.newUser };
    this.dataService.save(newUser);
    this.newUser = { nome: '', email: '' };
    this.loadData();
  }

  deleteUser(index: number) {
    this.dataService.delete(index);
    this.loadData();
  }
}
