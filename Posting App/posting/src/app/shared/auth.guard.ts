import { PostingService } from 'src/app/shared/posting.service';
import { Injectable, Component } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private postservice: PostingService, private router: Router) { }
  canActivate(): boolean {
    if (this.postservice.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
