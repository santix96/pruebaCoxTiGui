import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResidentialRoutingModule} from './residential-routing.module'
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { ResidentialComponent } from './residential.component';

@NgModule({
  declarations: [ResidentialComponent],
  imports: [
    CommonModule,
    ResidentialRoutingModule,
    NavbarModule
  ],
  entryComponents: [
    NavbarComponent
  ]
})
export class ResidentialModule { }
