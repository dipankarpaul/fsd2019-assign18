import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../shared/service/common.service';
import { CssSelector } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  esmForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private route: Router, public cs: CommonService) { }

  ngOnInit() {
      this.esmForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', [Validators.required]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.esmForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.esmForm.invalid) {
          return;
      }

      this.cs.isLoggedIn = true;
      this.route.navigate(["items"]);
  }

}
