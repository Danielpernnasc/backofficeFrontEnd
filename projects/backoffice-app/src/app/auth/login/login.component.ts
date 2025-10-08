import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private backendUrl = 'http://localhost:8080'; // URL base do backend

  onGoogleLogin(): void {
    // Redirecionar para a URL completa do endpoint de autenticação
    window.location.href = `${this.backendUrl}/oauth2/authorization/google`;
    // console.log('teste');
  }
}
