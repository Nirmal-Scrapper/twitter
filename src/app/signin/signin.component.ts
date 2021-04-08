import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  constructor() { 

  }
  nameFocusIn(){
    var y = document.getElementById("unamePlaceHolder");
    y.classList.add("PlaceHolderFocus");
  }
  nameFocusOut(){
    var y = document.getElementById("unamePlaceHolder");
    y.classList.remove("PlaceHolderFocus");
  }
  passFocusIn(){
    var y = document.getElementById("passPlaceHolder");
    y.classList.add("PlaceHolderFocus");
  }
  passFocusOut(){
    var y = document.getElementById("passPlaceHolder");
    y.classList.remove("PlaceHolderFocus");
  }
  nameChange(){
    var uname= (<HTMLInputElement>document.getElementById("userid"));
    var y = document.getElementById("unamePlaceHolder");

    console.log(uname.value.length,y.classList.contains("stayup"))
    if(uname.value.length>0){
      
      y.classList.add("stayup");
    }
    if(uname.value.length==0 && y.classList.contains("stayup")){
      y.classList.remove("stayup");
    }
  }
  passChange(){
    var pass= (<HTMLInputElement>document.getElementById("password"));
    var y = document.getElementById("passPlaceHolder");
    if(pass.value.length>0){
      y.classList.add("stayup");
    }
    if(pass.value.length==0 && y.classList.contains("stayup")){
      y.classList.remove("stayup");
    }
  }
  ngOnInit(): void {
    var uname= document.getElementById("userid");
    var pass= document.getElementById("password");
    uname.addEventListener('focus',this.nameFocusIn);
    uname.addEventListener('focusout',this.nameFocusOut);
    pass.addEventListener('focus',this.passFocusIn);
    pass.addEventListener('focusout',this.passFocusOut);
    uname.addEventListener('change',this.nameChange);
    pass.addEventListener('change',this.passChange);
  }

}
