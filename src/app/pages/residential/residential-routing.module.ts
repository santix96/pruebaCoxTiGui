  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResidentialComponent } from './residential.component';

const routes: Routes = [
  {
    path: '',
    component: ResidentialComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentialRoutingModule { }