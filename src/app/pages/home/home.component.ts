import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/common/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isLoading = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onLogOut() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
    localStorage.removeItem('loggedIn');
  }

  onAccount() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/managment']);
    }, 1000);
  }
}
