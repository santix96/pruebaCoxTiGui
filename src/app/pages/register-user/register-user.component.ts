import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  formRegisterUser: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formRegisterUser = this.formBuilder.group({
      userName: ['', [Validators.required]],
      userIdentificationNumber: ['', [Validators.required]],
      userCellPhoneNumber: ['', [Validators.required]],
      userEmail: ['', [Validators.required]],
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

}
