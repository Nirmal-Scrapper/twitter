import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  static password = new FormGroup({
    'password': new FormControl("", [Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
  });
  get staticformGroup():FormGroup{
    return PasswordComponent.password;
  }
  constructor() { }
  toggle(){
    var x = (<HTMLInputElement>document.getElementById("pass"));
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
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
  validate():boolean{
    if(PasswordComponent.password.invalid){
      return true;
    }
  }
  ngOnInit(): void {
    var uname = document.getElementById("pass");
    uname.addEventListener('focus', this.otpFocusIn);
    uname.addEventListener('focusout', this.otpFocusOut);
    uname.addEventListener('change', this.otpChange);
  }

}
