import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserRoutingModule } from './register-user-routing.module'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { RegisterUserComponent } from './register-user.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [RegisterUserComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    CommonModule,
    RegisterUserRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule
  ],
  exports: [
    RegisterUserComponent
  ]
})
export class RegisterUserModule { }
