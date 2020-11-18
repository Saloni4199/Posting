import { Router } from '@angular/router';
import { PostingService } from './../../shared/posting.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  postForm: any;

  constructor(private postingservice: PostingService, private route: Router) {

  }

  ngOnInit(): void {
    const username = localStorage.getItem('user');
    this.postForm = new FormGroup({
      caption: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      likes: new FormControl(0),
      user: new FormControl(username)
    });
  }
  preview(files) {
    if (files.length === 0) {
      return;
    }
    const fileType = files[0].type;
    if (fileType.match(/image\/*/) == null) {
      this.message = 'Only images are supported';
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }
  post() {
    this.postForm.value.image = this.imgURL;
    this.postingservice.storepost(this.postForm.value).subscribe(
      response => { alert('Post successful'), this.postForm.reset(); this.route.navigate(['\home']); },
      error => alert('Error!')
    );
  }
}
