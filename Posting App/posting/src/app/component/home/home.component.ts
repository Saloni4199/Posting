import { PostingService } from './../../shared/posting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  postdata: any;
  like: 0;
  constructor(private postingservice: PostingService) { }

  ngOnInit(): void {
    this.postingservice.refreshneed.subscribe(() => { this.allpost(); });
    this.allpost();
  }
  private allpost() {
    this.postingservice.getpost().subscribe(data => this.postdata = data);
  }
}
