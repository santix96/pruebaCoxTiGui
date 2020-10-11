import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/userService/user.service';
import { ResidencialService } from '../../services/residencialService/residencial.service';
import { FinancialService } from '../../services/financialService/financial.service';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  formRegisterUser: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private residentialService: ResidencialService,
    private financialService: FinancialService
  ) { }

  ngOnInit(): void {
    this.formRegisterUser = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(10),]],
      userIdentificationNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      userCellPhoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      userEmail: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      userEmailConfirmation: ['', [Validators.required]],
      userPassword: ['', [Validators.required]],
      userPasswordConfirmation: ['', [Validators.required]],
      userDepartment: ['', [Validators.required]],
      userCity: ['', [Validators.required]],
      userNeighborhood: ['', [Validators.required]],
      userAddress: ['', [Validators.required]],
      userSalary: ['', [Validators.required]],
      userOtherIncome: ['', [Validators.required]],
      userMonthlyExpenses: ['', [Validators.required]],
      userFinancialExpenses: ['', [Validators.required]],
    });
  }

  confirmationPassword(event) {
    if (this.formRegisterUser.controls['userPassword'].value != event.target.value) {
      alert('La contraseña no coincide con la ingresada, intentalo de nuevo');
      this.formRegisterUser.controls['userPasswordConfirmation'].setValue('');
    }
  }
  confirmationEmail(event) {
    if (this.formRegisterUser.controls['userEmail'].value != event.target.value) {
      alert('El correo electronico no coincide con el ingresado, intentalo de nuevo');
      this.formRegisterUser.controls['userEmailConfirmation'].setValue('');
    }
  }

  registerNewUser() {
    const passwordSha256 = sha256(this.formRegisterUser.controls['userPassword'].value);
    this.formRegisterUser.controls['userPassword'].setValue(passwordSha256);

    const userData = {
      userName: this.formRegisterUser.controls['userName'].value,
      userPassword: this.formRegisterUser.controls['userPassword'].value,
      userCellPhoneNumber: this.formRegisterUser.controls['userCellPhoneNumber'].value,
      userIdentificationNumber: this.formRegisterUser.controls['userIdentificationNumber'].value,
      userEmail: this.formRegisterUser.controls['userEmail'].value,
    }

    this.userService.createUser(userData).subscribe(
      (response) => {
        localStorage.setItem('currentUser', response['email']);
        let userId = response['id'];
        const residentialData = {
          userId: userId,
          userDepartment: this.formRegisterUser.controls['userDepartment'].value,
          userCity: this.formRegisterUser.controls['userCity'].value,
          userNeighborhood: this.formRegisterUser.controls['userNeighborhood'].value,
          userAddress: this.formRegisterUser.controls['userAddress'].value,
        };

        this.residentialService.createResidential(residentialData).subscribe(
          (response) => {
            const financialData = {
              userId: userId,
              userSalary: this.formRegisterUser.controls['userSalary'].value,
              userMonthlyExpenses: this.formRegisterUser.controls['userMonthlyExpenses'].value,
              userOtherIncome: this.formRegisterUser.controls['userOtherIncome'].value,
              userFinancialExpenses: this.formRegisterUser.controls['userFinancialExpenses'].value,
            };
            this.financialService.createFinancial(financialData).subscribe(
              (response) => {
                this.router.navigate(['/user']);
              },
              (error) => {
                console.error(error);
              }
            )
          },
          (error) => {
            console.error(error);
          }
        );
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getError(field: string) {
    if (this.formRegisterUser.get(field).hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (this.formRegisterUser.get(field).hasError('pattern')) {
      return 'Caracteres ingresados no validos';
    }
    if (this.formRegisterUser.get(field).hasError('minlength')) {
      return 'Los caracteres del campo no cumplen con el tamaño minimo';
    }
    if (this.formRegisterUser.get(field).hasError('maxlength')) {
      return 'Los caracteres del campo no cumplen con el tamaño maximo';
    }
    if (this.formRegisterUser.get(field).hasError('min')) {
      return 'El valor ingresado es demasiado pequeño';
    }
    if (this.formRegisterUser.get(field).hasError('max')) {
      return 'El valor ingresado es superior al requerido';
    }
  }
}
