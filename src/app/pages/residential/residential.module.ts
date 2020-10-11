import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResidentialRoutingModule} from './residential-routing.module'
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { ResidentialComponent } from './residential.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ResidentialComponent],
  imports: [
    CommonModule,
    ResidentialRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    NavbarModule
  ],
  exports: [
    ResidentialComponent
  ],
  entryComponents: [
    NavbarComponent
  ]
})
export class ResidentialModule { }
