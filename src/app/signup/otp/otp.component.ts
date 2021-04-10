import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  static otp = new FormGroup({
    'otp': new FormControl("", [Validators.required,Validators.pattern("[0-9]{6}")])
  });
  constructor() { }
  get staticformGroup():FormGroup{
    return OtpComponent.otp;
  }
  otpFocusIn() {
    console.log("jsdvjhsdvhjg")
    var y = document.getElementById("otpPlaceHolder");
    y.classList.add("PlaceHolderFocus");
  }
  otpFocusOut() {
    var y = document.getElementById("otpPlaceHolder");
    y.classList.remove("PlaceHolderFocus");
  }
  otpChange(){
    var pass = (<HTMLInputElement>document.getElementById("otp"));
    var y = document.getElementById("otpPlaceHolder");
    if (pass.value.length > 0) {
      y.classList.add("stayup");
    }
    if (pass.value.length == 0 && y.classList.contains("stayup")) {
      y.classList.remove("stayup");
    }
  }
  validate():boolean{
    console.log(OtpComponent.otp.invalid)
    return OtpComponent.otp.invalid;
      //return true;
    //}
  }
  ngOnInit(): void {
    var uname = document.getElementById("otp");
    uname.addEventListener('focus', this.otpFocusIn);
    uname.addEventListener('focusout', this.otpFocusOut);
    uname.addEventListener('change', this.otpChange);
  }

}
