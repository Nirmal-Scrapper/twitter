import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  constructor() { }
  otpFocusIn() {
    var y = document.getElementById("passwordPlaceHolder");
    y.classList.add("PlaceHolderFocus");
  }
  otpFocusOut() {
    var y = document.getElementById("passwordPlaceHolder");
    y.classList.remove("PlaceHolderFocus");
  }
  otpChange(){
    var pass = (<HTMLInputElement>document.getElementById("pass"));
    var y = document.getElementById("passwordPlaceHolder");
    if (pass.value.length > 0) {
      y.classList.add("stayup");
    }
    if (pass.value.length == 0 && y.classList.contains("stayup")) {
      y.classList.remove("stayup");
    }
  }
  ngOnInit(): void {
    var uname = document.getElementById("pass");
    uname.addEventListener('focus', this.otpFocusIn);
    uname.addEventListener('focusout', this.otpFocusOut);
    uname.addEventListener('change', this.otpChange);
  }

}
