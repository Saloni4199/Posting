import { PostingService } from './../../shared/posting.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: any;
  constructor(private postingservice: PostingService, private route: Router) { }
  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    }, { validators: PasswordValidator });

  }
  onSubmit() {
    // console.log(this.signUpForm.value);
    this.postingservice.storeuser(this.signUpForm.value).subscribe(
      response => alert('Signup successfull Please Login'),
      error => alert('Error!')
    );
    this.signUpForm.reset();
    this.route.navigate(['\signin']);
  }
}
