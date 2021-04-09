import { Component, OnInit } from '@angular/core';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor() { }
  nameFocusIn() {
   // console.log("jsdvjhsdvhjg")
    var y = document.getElementById("namesPlaceHolder");
    y.classList.add("PlaceHolderFocus");
  }
  nameFocusOut() {
    var y = document.getElementById("namesPlaceHolder");
    y.classList.remove("PlaceHolderFocus");
  }
  mailFocusIn() {
    var y = document.getElementById("contactPlaceHolder");
    y.classList.add("PlaceHolderFocus");
  }
  mailFocusOut() {
    var y = document.getElementById("contactPlaceHolder");
    y.classList.remove("PlaceHolderFocus");
  }
  nameChange() {
    var uname = (<HTMLInputElement>document.getElementById("name"));
    var y = document.getElementById("namesPlaceHolder");

    console.log(uname.value.length, y.classList.contains("stayup"))
    if (uname.value.length > 0) {

      y.classList.add("stayup");
    }
    if (uname.value.length == 0 && y.classList.contains("stayup")) {
      y.classList.remove("stayup");
    }
  }
  mailChange() {
    var pass = (<HTMLInputElement>document.getElementById("contact"));
    var y = document.getElementById("contactPlaceHolder");
    if (pass.value.length > 0) {
      y.classList.add("stayup");
    }
    if (pass.value.length == 0 && y.classList.contains("stayup")) {
      y.classList.remove("stayup");
    }
  }
  ngOnInit(): void {
    var uname = (<HTMLInputElement>document.getElementById("name"));
    var pass = document.getElementById("contact");
    uname.addEventListener('focus', this.nameFocusIn);
    uname.addEventListener('focusout', this.nameFocusOut);
    pass.addEventListener('focus', this.mailFocusIn);
    pass.addEventListener('focusout', this.mailFocusOut);
    uname.addEventListener('change', this.nameChange);
    pass.addEventListener('change', this.mailChange);
   // console.log(<string><unknown>new SignUpFormComponent().name);
    uname.value=new SignUpFormComponent().getName();
    this.nameChange();
  }

}
