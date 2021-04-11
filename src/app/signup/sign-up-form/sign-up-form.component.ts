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
    'month': new FormControl("", [Validators.required, Validators.minLength(3)]),
    'day': new FormControl("", [Validators.required, Validators.minLength(1)]),
    'year': new FormControl("", [Validators.required, Validators.minLength(4)])
  });
  constructor() {

  }

  get validate(): boolean {
    console.log(SignUpFormComponent.signup.status, SignUpFormComponent.signup.value)
    if (SignUpFormComponent.signup.invalid) {
      return true;
    }
  }
  // buttonState() {
  //   var next = (<HTMLInputElement>document.getElementById("next"));
  //   console.log(this.validate)
  //   if (this.validate) {
  //     next.disabled = true;
  //     next.style.opacity = "0.3";
  //   } else {
  //     next.disabled = false;
  //     next.style.opacity = "1";
  //   }
  // }
  swap() {
    var pass = (<HTMLInputElement>document.getElementById("mailOrNum"));
    pass.value = "";
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
  nameFocus() {
    var uname = (<HTMLInputElement>document.getElementById("uname"));
    uname.focus();
  }
  mailFocus() {
    var pass = (<HTMLInputElement>document.getElementById("mailOrNum"));
    pass.focus();
  }
  dobFocus() {
    var month = (<HTMLInputElement>document.getElementById("month"));
    month.focus();
  }
  // nameFocusIn() {
  //   //console.log("jsdvjhsdvhjg")
  //   var y = document.getElementById("namePlaceHolder");
  //   y.classList.add("PlaceHolderFocus");
  //   var next = (<HTMLInputElement>document.getElementById("next"));
  //   console.log(this.validate)
  //   if (!this.validate) {
  //     next.disabled = false;
  //     next.style.opacity = "1";
  //   } else {
  //     next.disabled = true;
  //     next.style.opacity = "0.3";
  //   }
  // }
  // nameFocusOut() {
  //   var y = document.getElementById("namePlaceHolder");
  //   y.classList.remove("PlaceHolderFocus");
  // }
  // mailFocusIn() {
  //   console.log(this.validate)
  //   var y = document.getElementById("mailPlaceHolder");
  //   y.classList.add("PlaceHolderFocus");
  //   var next = (<HTMLInputElement>document.getElementById("next"));
  //   if (this.validate) {
  //     next.disabled = true;
  //     next.style.opacity = "0.3";
  //   } else {
  //     next.disabled = false;
  //     next.style.opacity = "1";
  //   }
  // }
  // mailFocusOut() {
  //   var y = document.getElementById("mailPlaceHolder");
  //   y.classList.remove("PlaceHolderFocus");
  // }

  // nameChange() {
  //   var uname = (<HTMLInputElement>document.getElementById("uname"));
  //   var y = document.getElementById("namePlaceHolder");

  //   // console.log(uname.value.length, y.classList.contains("stayup"))
  //   if (uname.value.length > 0) {

  //     y.classList.add("stayup");
  //   }
  //   if (uname.value.length == 0 && y.classList.contains("stayup")) {
  //     y.classList.remove("stayup");
  //   }
  //   this.names = uname.value
  //   //this.buttonState();
  // }
  // mailChange() {
  //   var pass = (<HTMLInputElement>document.getElementById("mailOrNum"));
  //   var y = document.getElementById("mailPlaceHolder");
  //   // this.buttonState();
  //   if (pass.value.length > 0) {
  //     y.classList.add("stayup");
  //   }
  //   if (pass.value.length == 0 && y.classList.contains("stayup")) {
  //     y.classList.remove("stayup");
  //   }
  //   //this.buttonState
  // }
  get staticformGroup(): FormGroup {
    return SignUpFormComponent.signup;
  }

  get contact(): string {
    var x = document.getElementById("mailPlaceHolder");
    return x.innerHTML;
  }
  get name() {
    return SignUpFormComponent.signup.get('name').value;
  }
  get email() {
    return SignUpFormComponent.signup.get('email').value;
  }
  get dob(): string {
    var day = (<HTMLInputElement>document.getElementById("day"));
    var month = (<HTMLInputElement>document.getElementById("month"));
    var year = (<HTMLInputElement>document.getElementById("year"));
    return SignUpFormComponent.signup.get('month').value + " " + SignUpFormComponent.signup.get('day').value + ", " + SignUpFormComponent.signup.get('year').value
  }


  ngOnInit(): void {
    var day = document.getElementById("day");
    var year = document.getElementById("year");
    var month = document.getElementById("month");

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

    uname.addEventListener('focus', () => {
      //console.log("jsdvjhsdvhjg")
      var y = document.getElementById("namePlaceHolder");
      y.classList.add("PlaceHolderFocus");
      var next = (<HTMLInputElement>document.getElementById("next"));
      //console.log(this.validate)
      if (this.validate) {
        next.disabled = true;
        next.style.opacity = "0.3";
      } else {
        next.disabled = false;
        next.style.opacity = "1";
      }
    });


    uname.addEventListener('focusout', () =>{
      var y = document.getElementById("namePlaceHolder");
      y.classList.remove("PlaceHolderFocus");
      var next = (<HTMLInputElement>document.getElementById("next"));
     // console.log(this.validate)
      if (this.validate) {
        next.disabled = true;
        next.style.opacity = "0.3";
      } else {
        next.disabled = false;
        next.style.opacity = "1";
      }
    });


    pass.addEventListener('focus', () => {
      console.log(this.validate)
      var y = document.getElementById("mailPlaceHolder");
      y.classList.add("PlaceHolderFocus");
      var next = (<HTMLInputElement>document.getElementById("next"));
      if (this.validate) {
        next.disabled = true;
        next.style.opacity = "0.3";
      } else {
        next.disabled = false;
        next.style.opacity = "1";
      }
    });


    pass.addEventListener('focusout', () =>{
      var y = document.getElementById("mailPlaceHolder");
      y.classList.remove("PlaceHolderFocus");
      var next = (<HTMLInputElement>document.getElementById("next"));
     // console.log(this.validate)
      if (this.validate) {
        next.disabled = true;
        next.style.opacity = "0.3";
      } else {
        next.disabled = false;
        next.style.opacity = "1";
      }
    });
    uname.addEventListener('change', () =>{
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
      var next = (<HTMLInputElement>document.getElementById("next"));
      console.log(this.validate)
      if (this.validate) {
        next.disabled = true;
        next.style.opacity = "0.3";
      } else {
        next.disabled = false;
        next.style.opacity = "1";
      }
      //this.buttonState();
    });
    pass.addEventListener('change', () =>{
      var pass = (<HTMLInputElement>document.getElementById("mailOrNum"));
      var y = document.getElementById("mailPlaceHolder");
      // this.buttonState();
      if (pass.value.length > 0) {
        y.classList.add("stayup");
      }
      if (pass.value.length == 0 && y.classList.contains("stayup")) {
        y.classList.remove("stayup");
      }
      var next = (<HTMLInputElement>document.getElementById("next"));
      console.log(this.validate)
      if (this.validate) {
        next.disabled = true;
        next.style.opacity = "0.3";
      } else {
        next.disabled = false;
        next.style.opacity = "1";
      }
      //this.buttonState
    });

    month.addEventListener('focus', () => {
  //    console.log(this.validate)
      var next = (<HTMLInputElement>document.getElementById("next"));
      if (this.validate) {
        next.disabled = true;
        next.style.opacity = "0.3";
      } else {
        next.disabled = false;
        next.style.opacity = "1";
      }
    });
    month.addEventListener('focusout', () => {
  //    console.log(this.validate)
      var next = (<HTMLInputElement>document.getElementById("next"));
      if (this.validate) {
        next.disabled = true;
        next.style.opacity = "0.3";
      } else {
        next.disabled = false;
        next.style.opacity = "1";
      }
    });
    day.addEventListener('focus', () => {
    //  console.log(this.validate)

      var next = (<HTMLInputElement>document.getElementById("next"));
      if (this.validate) {
        next.disabled = true;
        next.style.opacity = "0.3";
      } else {
        next.disabled = false;
        next.style.opacity = "1";
      }
    });
    year.addEventListener('focus', () => {
      console.log(this.validate)

      var next = (<HTMLInputElement>document.getElementById("next"));
      if (this.validate) {
        next.disabled = true;
        next.style.opacity = "0.3";
      } else {
        next.disabled = false;
        next.style.opacity = "1";
      }
    });
    day.addEventListener('focusout', () => {
      console.log(this.validate)

      var next = (<HTMLInputElement>document.getElementById("next"));
      if (this.validate) {
        next.disabled = true;
        next.style.opacity = "0.3";
      } else {
        next.disabled = false;
        next.style.opacity = "1";
      }
    });
    year.addEventListener('focusout', () => {
      console.log(this.validate)

      var next = (<HTMLInputElement>document.getElementById("next"));
      if (this.validate) {
        next.disabled = true;
        next.style.opacity = "0.3";
      } else {
        next.disabled = false;
        next.style.opacity = "1";
      }
    });
    // SignUpFormComponent.signup.controls['email'].valueChanges.subscribe(() => {
    //   var next = (<HTMLInputElement>document.getElementById("next"));
    //   if (this.validate) {
    //     next.disabled = true;
    //     next.style.opacity="0.3";
    //   } else {
    //     next.disabled = false;
    //     next.style.opacity="1";
    //   }
    // })
    // SignUpFormComponent.signup.controls['name'].valueChanges.subscribe(() => {
    //   var next = (<HTMLInputElement>document.getElementById("next"));
    //   if (this.validate) {
    //     next.disabled = true;
    //     next.style.opacity="0.3";
    //   } else {
    //     next.disabled = false;
    //     next.style.opacity="1";
    //   }
    // })
    // SignUpFormComponent.signup.controls['day'].valueChanges.subscribe(() => {
    //   var next = (<HTMLInputElement>document.getElementById("next"));
    //   if (this.validate) {
    //     next.disabled = true;
    //     next.style.opacity="0.3";
    //   } else {
    //     next.disabled = false;
    //     next.style.opacity="1";
    //   }
    // })
    // SignUpFormComponent.signup.controls['month'].valueChanges.subscribe(() => {
    //   var next = (<HTMLInputElement>document.getElementById("next"));
    //   if (this.validate) {
    //     next.disabled = true;
    //     next.style.opacity="0.3";
    //   } else {
    //     next.disabled = false;
    //     next.style.opacity="1";
    //   }
    // })
    // SignUpFormComponent.signup.controls['year'].valueChanges.subscribe(() => {
    //   var next = (<HTMLInputElement>document.getElementById("next"));
    //   if (this.validate) {
    //     next.disabled = true;
    //     next.style.opacity="0.3";
    //   } else {
    //     next.disabled = false;
    //     next.style.opacity="1";
    //   }
    // })
  }
}
