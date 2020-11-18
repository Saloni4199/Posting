import { AuthGuard } from './shared/auth.guard';
import { PostComponent } from './component/post/post.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { addpostCanDeactivateGuard } from './shared/addpost.guard.service';


const routes: Routes = [
  { path : 'signup', loadChildren: () => import('./component/signup/signup.module').then(m => m.SignupModule) },
  { path: 'signin', component: SignInComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'post', component: PostComponent, canDeactivate: [addpostCanDeactivateGuard] },
  {path: '**', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
