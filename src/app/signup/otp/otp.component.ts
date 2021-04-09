import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  constructor() { }
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
  ngOnInit(): void {
    var uname = document.getElementById("otp");
    uname.addEventListener('focus', this.otpFocusIn);
    uname.addEventListener('focusout', this.otpFocusOut);
    uname.addEventListener('change', this.otpChange);

  }

}
