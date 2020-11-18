import { UserInterceptorService } from './shared/user-interceptor.service';
import { PostingService } from './shared/posting.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostComponent } from './component/post/post.component';
import { LikeComponent } from './component/like/like.component';
import { addpostCanDeactivateGuard } from './shared/addpost.guard.service';
import { CommentComponent } from './component/comment/comment.component';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    PostComponent,
    LikeComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [addpostCanDeactivateGuard, AuthGuard, PostingService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
