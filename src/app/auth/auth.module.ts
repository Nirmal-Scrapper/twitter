import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from '../signin/signin.component';
import { CreateComponent } from '../signup/create/create.component';
import { OtpComponent } from '../signup/otp/otp.component';
import { PasswordComponent } from '../signup/password/password.component';
import { SignUpFormComponent } from '../signup/sign-up-form/sign-up-form.component';
import { SignupComponent } from '../signup/signup.component';
import { TrackComponent } from '../signup/track/track.component';

@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    SigninComponent,
    CreateComponent,
    OtpComponent,
    PasswordComponent,
    SignUpFormComponent,
    TrackComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
