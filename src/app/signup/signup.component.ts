import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
        x.classList.remove("block");
        x.classList.add("none");
        y.classList.remove("none");
        y.classList.add("block")
        return
      }
    }
  }

  ngOnInit(): void {

  }

}
