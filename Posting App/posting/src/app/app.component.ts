import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'postingApp';
  user: string;
  constructor(private router: Router) {
  }
  get displayAppComponent(): boolean {
    this.user = localStorage.getItem('user');
    if (this.router.url === '/' || this.router.url === '/signin'|| this.router.url === '/signup') {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    localStorage.clear();
  }
}
