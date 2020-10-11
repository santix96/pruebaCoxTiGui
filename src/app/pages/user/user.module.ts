import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from './user-routing.module';

import { UserComponent} from './user.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    NavbarModule
  ],
  exports: [
    UserComponent
  ],
  entryComponents: [
    NavbarComponent
  ]
})
export class UserModule { }
