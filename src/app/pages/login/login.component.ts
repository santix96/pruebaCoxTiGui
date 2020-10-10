import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogIn: FormGroup;

  emailPattern = "^[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,4}\.[a-z]{2,4}$";

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formLogIn = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.minLength(5)]],
      userPassword: ['', [Validators.required]],
    });
  }
  
  public getError(controlName: string): string {
    let errorMessage = null;
    const control = this.formLogIn.get(controlName);
    if (control.touched && control.errors != null) {
      const error = JSON.stringify(control.errors);
      const { required } = control.errors;
      const { minlength } = control.errors;
      const { userEmail } = control.errors;
      if (required) {
        errorMessage = 'Campo requerido';
      }
      if (minlength) {
        errorMessage = 'Minimo 3 caracteres';
      }
      if (userEmail) {
        errorMessage = 'Email invalido';
      }
      // console.log(control.errors);
    }
    return errorMessage;
  }

}
