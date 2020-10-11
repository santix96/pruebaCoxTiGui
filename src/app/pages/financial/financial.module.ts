import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FinancialRoutingModule} from './financial-routing.module'
import { FinancialComponent } from './financial.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  declarations: [FinancialComponent],
  imports: [
    CommonModule,
    FinancialRoutingModule,
    NavbarModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule
  ],
  exports:[
    FinancialComponent
  ],
  entryComponents: [
    NavbarComponent
  ]
})
export class FinancialModule { }
