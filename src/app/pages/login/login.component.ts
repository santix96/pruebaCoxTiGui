import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/authService/auth-service.service';
import {sha256} from 'js-sha256';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogIn: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formLogIn = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern(this.emailPattern)]],
      userPassword: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.verifySession();
  }

  login() {
    const passwordSha256 = sha256(this.formLogIn.controls['userPassword'].value);
    this.formLogIn.controls['userPassword'].setValue(passwordSha256);

    this.authService.login(this.formLogIn.value).subscribe(
      (response) => {
        localStorage.setItem('currentUser', response['email']);
        this.router.navigate(['/user'])
      },
      (error) => {
        console.error(error);
      }
    );
  }


  verifySession() {
    if (!localStorage.getItem('currentUser')) {
      this.router.navigate(['/login'])
    } else {
      this.router.navigate(['/user'])
    }
  }

  getError(field: string) {
    if (this.formLogIn.get(field).hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (this.formLogIn.get(field).hasError('pattern')) {
      return 'Caracteres ingresados no validos';
    }
    if (this.formLogIn.get(field).hasError('minlength')) {
      return 'Los caracteres del campo no cumplen con el tamaño minimo';
    }
    if (this.formLogIn.get(field).hasError('maxlength')) {
      return 'Los caracteres del campo no cumplen con el tamaño maximo';
    }
    if (this.formLogIn.get(field).hasError('min')) {
      return 'El valor ingresado es demasiado pequeño';
    }
    if (this.formLogIn.get(field).hasError('max')) {
      return 'El valor ingresado es superior al requerido';
    }
  }


}
