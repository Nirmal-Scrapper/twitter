import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { TestComponent } from './test/test.component';
import { TrackComponent } from './signup/track/track.component';
import { CreateComponent } from './signup/create/create.component';
import { OtpComponent } from './signup/otp/otp.component';
import { SignUpFormComponent } from './signup/sign-up-form/sign-up-form.component';
import { PasswordComponent } from './signup/password/password.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    TestComponent,
    TrackComponent,
    CreateComponent,
    OtpComponent,
    SignUpFormComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
