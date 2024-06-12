import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'user' && this.password === 'password') {
      localStorage.setItem('user', this.username);
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    }
  }
}
