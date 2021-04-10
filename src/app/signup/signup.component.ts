import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { OtpComponent } from './otp/otp.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  flow = 1;
  boxes = ["box1", "box2", "box3", "box4", "box5"]
  constructor() { }
  next() {
    for (var i = 0; i < 4; i++) {
      var x = document.getElementById(this.boxes[i]);
      var y = document.getElementById(this.boxes[i + 1]);
      if (x.classList.contains("block")) {
        if (this.check(this.boxes[i + 1])) {
          return
        }
        x.classList.remove("block");
        x.classList.add("none");
        y.classList.remove("none");
        y.classList.add("block")
        return
      }
    }
  }
  back() {
    for (var i = 4; i > 0; i--) {
      var x = document.getElementById(this.boxes[i]);
      var y = document.getElementById(this.boxes[i - 1]);
      if (x.classList.contains("block")) {
        if (this.check(this.boxes[i - 1])) {
          return
        }
        x.classList.remove("block");
        x.classList.add("none");
        y.classList.remove("none");
        y.classList.add("block")
        return
      }
    }
  }
  check(box): boolean {
    if (box == "box1") {
      if (!document.getElementById("back").classList.contains("none")) {
        document.getElementById("back").classList.add("none")
      }
      document.getElementById("box-icon").classList.remove("none")
      document.getElementById("next").classList.remove("none")
    }
    else if (box == "box2") {
      console.log("box1")
      if (new SignUpFormComponent().validate()) {
        return true
      }
      if (document.getElementById("box-icon").classList.contains("none")) {
        document.getElementById("box-icon").classList.remove("none")
      }
      if (document.getElementById("next").classList.contains("none")) {
        document.getElementById("next").classList.remove("none")

      }
      document.getElementById("step3").classList.add("none")
      document.getElementById("back").classList.remove("none")
    } else if (box == "box3") {
      console.log("box2")
      new CreateComponent().refresh();
      document.getElementById("step3").classList.remove("none")
      document.getElementById("box-icon").classList.add("none")
      document.getElementById("next").classList.add("none")
      document.getElementById("step4").classList.add("none")
    } else if (box == "box4") {
      document.getElementById("next").classList.remove("none")
      document.getElementById("step3").classList.add("none")
      document.getElementById("step4").classList.remove("none")
      console.log(document.getElementById("step5").classList.contains("none"), !document.getElementById("step5").classList.contains("none"))
      if (!document.getElementById("step5").classList.contains("none")) {
        document.getElementById("step5").classList.add("none")
      }
    }
    else if (box == "box5") {
      console.log("box5")
      if (new OtpComponent().validate()) {
        return true
      }
      document.getElementById("step4").classList.add("none")
      document.getElementById("step5").classList.remove("none")
    }
    return false;
  }
  ngOnInit(): void {

  }

}
