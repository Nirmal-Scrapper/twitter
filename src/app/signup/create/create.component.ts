import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';
import { SignupComponent } from '../signup.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  static obj = new SignUpFormComponent();
  // static create: FormGroup;
  // create = CreateComponent.obj.staticformGroup;
  constructor() { }
  nameFocusIn() {
    // console.log("jsdvjhsdvhjg")
    //var y = document.getElementById("namesPlaceHolder");
    // y.classList.add("PlaceHolderFocus");
    document.getElementById("back").click()
    document.getElementById("back").click()
    CreateComponent.obj.nameFocus();
  }
  next() {
    // new SignupComponent().next();
    document.getElementById("next").click()
  }
  nameFocusOut() {
    var y = document.getElementById("namesPlaceHolder");
    y.classList.remove("PlaceHolderFocus");
  }
  mailFocusIn() {
    // var y = document.getElementById("contactPlaceHolder");
    // y.classList.add("PlaceHolderFocus");
    document.getElementById("back").click()
    document.getElementById("back").click()
    CreateComponent.obj.mailFocus();
  }
  mailFocusOut() {
    var y = document.getElementById("contactPlaceHolder");
    y.classList.remove("PlaceHolderFocus");
  }
  dobFocusIn() {
    // var y = document.getElementById("birthdayPlaceHolder");
    // y.classList.add("PlaceHolderFocus");
    document.getElementById("back").click()
    document.getElementById("back").click()
    CreateComponent.obj.dobFocus();
  }
  dobFocusOut() {
    var y = document.getElementById("birthdayPlaceHolder");
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
  dobChange() {
    var uname = (<HTMLInputElement>document.getElementById("birthday"));
    var y = document.getElementById("birthdayPlaceHolder");

    console.log(uname.value.length, y.classList.contains("stayup"))
    if (uname.value.length > 0) {

      y.classList.add("stayup");
    }
    if (uname.value.length == 0 && y.classList.contains("stayup")) {
      y.classList.remove("stayup");
    }
  }
  refresh() {
    // console.log("create : ",new SignUpFormComponent().name)
    //CreateComponent.create = CreateComponent.obj.staticformGroup;
    var name: any;
    var contact = CreateComponent.obj.email;
    var pass = (<HTMLInputElement>document.getElementById("contact"));
    var uname = (<HTMLInputElement>document.getElementById("name"));
    var dob = (<HTMLInputElement>document.getElementById("birthday"));
    var PlaceHolder = document.getElementById("contactPlaceHolder");
    PlaceHolder.innerHTML = CreateComponent.obj.contact;
    name = CreateComponent.obj.name;
   // CreateComponent.create.get('name').setValue = name;
    //CreateComponent.create.get('email').setValue = contact;
    pass.value = contact;
    uname.value = name;
    dob.value = CreateComponent.obj.dob;
    this.dobChange();
    this.nameChange();
    this.mailChange();
  }
  // get formGroup(): FormGroup {
  //   return CreateComponent.create;
  // }
  ngOnInit(): void {
    var uname = (<HTMLInputElement>document.getElementById("name"));
    var pass = document.getElementById("contact");
    var dob = document.getElementById("birthday");
    uname.addEventListener('focus', this.nameFocusIn);
    // uname.addEventListener('focusout', this.nameFocusOut);

    pass.addEventListener('focus', this.mailFocusIn);
    // pass.addEventListener('focusout', this.mailFocusOut);

    uname.addEventListener('change', this.nameChange);

    pass.addEventListener('change', this.mailChange);

    dob.addEventListener('focus', this.dobFocusIn);
    //dob.addEventListener('focusout', this.dobFocusOut);

    dob.addEventListener('change', this.dobChange);

    // console.log(<string><unknown>new SignUpFormComponent().name);
  }

}
