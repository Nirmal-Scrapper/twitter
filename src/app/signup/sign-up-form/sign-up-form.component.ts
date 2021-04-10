import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  //signup: FormGroup;
  names: string;
  static signup = new FormGroup({
    'name': new FormControl("", Validators.required),
    'email': new FormControl("", [Validators.required, Validators.email]),
    'month': new FormControl("", Validators.required),
    'day': new FormControl("", Validators.required),
    'year': new FormControl("", Validators.required)
  });
  constructor() { 
    
  }
  swap() {
    var pass = (<HTMLInputElement>document.getElementById("mailOrNum"));
    pass.value="";
    //console.log(SignUpFormComponent.signup)
    //SignUpFormComponent.signup.get('email').setValue("");
    console.log(SignUpFormComponent.signup)
    var phone = "Use phone instead";
    var email = "Use email instead";
    console.log("qwertyui")
    var x = document.getElementById("mailPlaceHolder");
    var y = document.getElementById("swapper");
    if (y.innerHTML == email) {
      y.innerHTML = phone
      x.innerHTML = "Email";
      SignUpFormComponent.signup.get('email').setValidators([Validators.required, Validators.email])
    } else {
      y.innerHTML = email;
      x.innerHTML = "Phone";
      SignUpFormComponent.signup.get('email').setValidators([Validators.required, Validators.pattern("[0-9]{10}")]);
    }
  }
  nameFocus(){
    var uname = (<HTMLInputElement>document.getElementById("uname"));
    uname.focus();
  }
  mailFocus(){
    var pass = (<HTMLInputElement>document.getElementById("mailOrNum"));
    pass.focus();
  }
  dobFocus(){
    var month = (<HTMLInputElement>document.getElementById("month"));
    month.focus();
  }
  nameFocusIn() {
    //console.log("jsdvjhsdvhjg")
    var y = document.getElementById("namePlaceHolder");
    y.classList.add("PlaceHolderFocus");
  }
  nameFocusOut() {
    var y = document.getElementById("namePlaceHolder");
    y.classList.remove("PlaceHolderFocus");
  }
  mailFocusIn() {
    var y = document.getElementById("mailPlaceHolder");
    y.classList.add("PlaceHolderFocus");
  }
  mailFocusOut() {
    var y = document.getElementById("mailPlaceHolder");
    y.classList.remove("PlaceHolderFocus");
  }
  nameChange() {
    var uname = (<HTMLInputElement>document.getElementById("uname"));
    var y = document.getElementById("namePlaceHolder");

   // console.log(uname.value.length, y.classList.contains("stayup"))
    if (uname.value.length > 0) {

      y.classList.add("stayup");
    }
    if (uname.value.length == 0 && y.classList.contains("stayup")) {
      y.classList.remove("stayup");
    }
    this.names = uname.value
  }
  mailChange() {
    var pass = (<HTMLInputElement>document.getElementById("mailOrNum"));
    var y = document.getElementById("mailPlaceHolder");
    if (pass.value.length > 0) {
      y.classList.add("stayup");
    }
    if (pass.value.length == 0 && y.classList.contains("stayup")) {
      y.classList.remove("stayup");
    }
  }
  get staticformGroup():FormGroup{
    return SignUpFormComponent.signup;
  }
  getName(): string {
    return this.names;
  }
  get contact():string{
    var x = document.getElementById("mailPlaceHolder");
    return x.innerHTML;
  }
  get name() {
    return SignUpFormComponent.signup.get('name').value;
  }
  get email() {
    return SignUpFormComponent.signup.get('email').value;
  }
  get dob():string{
    var day = (<HTMLInputElement>document.getElementById("day"));
    var month = (<HTMLInputElement>document.getElementById("month"));
    var year = (<HTMLInputElement>document.getElementById("year"));
    return SignUpFormComponent.signup.get('month').value+" "+SignUpFormComponent.signup.get('day').value+", "+SignUpFormComponent.signup.get('year').value
  }
  validate():boolean{
    console.log(SignUpFormComponent.signup.status,SignUpFormComponent.signup.value)
    if(SignUpFormComponent.signup.invalid){
      return true;
    }
  }
  ngOnInit(): void {
    var day = document.getElementById("day");
    var year = document.getElementById("year");
    var append = "<option class='none'></option>";
    for (var i = 1; i < 32; i++) {
      append += "<option value=" + i + ">" + i + "</option>";
    }
    day.innerHTML = append;
    append = "<option class='none'></option>";
    for (var i = 2021; i > 1900; i--) {
      append += "<option value=" + i + ">" + i + "</option>";
    }
    year.innerHTML = append;
    var uname = document.getElementById("uname");
    var pass = document.getElementById("mailOrNum");
    uname.addEventListener('focus', this.nameFocusIn);
    uname.addEventListener('focusout', this.nameFocusOut);
    pass.addEventListener('focus', this.mailFocusIn);
    pass.addEventListener('focusout', this.mailFocusOut);
    uname.addEventListener('change', this.nameChange);
    pass.addEventListener('change', this.mailChange);
    
  }

}
