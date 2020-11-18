import { SignupRoutingModule } from './signuprouting.module';
import { SignupComponent } from './signup.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    SignupRoutingModule,
    SharedModule
  ]
})
export class SignupModule { }
