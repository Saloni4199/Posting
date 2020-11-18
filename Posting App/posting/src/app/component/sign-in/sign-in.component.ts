import { Router } from '@angular/router';
import { PostingService } from './../../shared/posting.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userdata: any;
  signinpassword: any;
  signinusername: any;
  flag: number;
  constructor(private postingService: PostingService, private router: Router) {
  }

  ngOnInit(): void {
    this.postingService.refreshneed.subscribe(() => { this.alluser(); });
    this.alluser();
  }

  private alluser() {
    this.postingService.getuser().subscribe(data => this.userdata = data);
  }
  login(loginForm: NgForm) {
    this.signinusername = loginForm.value.username;
    this.signinpassword = loginForm.value.password;
    this.flag = 0;
    for (const user in this.userdata) {
      if (this.userdata[user].username === this.signinusername && this.userdata[user].password === this.signinpassword) {
        this.flag = 1;
        localStorage.setItem('user', this.signinusername);
        alert('login successful');
        this.router.navigate(['/home']);
      }
    }
    if (this.flag === 0) {
      alert('invalid user/password');
    }
  }
}

