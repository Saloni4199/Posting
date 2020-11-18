import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostingService {

  constructor(private httpClient: HttpClient) { }
  url = 'http://localhost:3000/users';
  posturl = 'http://localhost:3000/posts';
  commenturl = 'http://localhost:3000/comments';
  private refresh = new Subject<void>();

  get refreshneed() {
    return this.refresh;
  }
  storeuser(userdata: any) {
    return this.httpClient.post(this.url, userdata).pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }

  getuser() {
    return this.httpClient.get(this.url);
  }
  loggedIn() {
    return !!localStorage.getItem('user');
  }
  storepost(postdata: any) {
    return this.httpClient.post(this.posturl, postdata).pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }

  getpost() {
    return this.httpClient.get(this.posturl);
  }
  storecomment(commentdata: any) {
    return this.httpClient.post(this.commenturl, commentdata).pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }

  getcomment() {
    return this.httpClient.get(this.commenturl);
  }

  getToken() {
    return localStorage.getItem('user');
  }
}
