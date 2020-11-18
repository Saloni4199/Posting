import { PostingService } from 'src/app/shared/posting.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: any;
  commentForm: any;
  @Input() postId: string;
  constructor(private postingservice: PostingService) { }

  ngOnInit(): void {
    const username = localStorage.getItem('user');
    this.postingservice.getcomment().subscribe(data => this.comments = data);
    this.commentForm = new FormGroup({
      comment: new FormControl('', Validators.required),
      postID: new FormControl(this.postId),
      user: new FormControl(username)
    });
  }
  addComment() {
    this.postingservice.storecomment(this.commentForm.value).subscribe(
      response => { alert('commented successfully'), this.commentForm.reset(); },
      error => alert('Error!')
    );
  }

  getComment(postID: string): any {
    const comment: object[] = [];
    for (const item in this.comments) {
      if (this.comments[item].postID === postID) {
        comment.push(this.comments[item]);
      }
    }
    return comment;
  }
}

