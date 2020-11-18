import { HttpClient } from '@angular/common/http';
import { PostingService } from 'src/app/shared/posting.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Output() likeEvent = new EventEmitter<number>();
  @Input() numberOfLikes: number;
  @Input() postId: string;
  postdata: any;
  constructor(private postservice: PostingService, private http: HttpClient) { }
  ngOnInit(): void {
    this.postservice.getpost().subscribe(data => {
      for (const i in data) {
        if (data[i].id === this.postId) {
          this.postdata = data[i];
          break;
        }
      }
    }
    );
  }

  likeButtonClick() {
    this.postdata.likes++;
    this.uploadlikes();
  }

  dislikeButtonClick() {
    if (this.postdata.likes) {
      this.postdata.likes--;
    }
    this.uploadlikes();
  }

  uploadlikes() {
    this.http.put('http://localhost:3000/posts/' + this.postId, this.postdata).subscribe();
  }
}
