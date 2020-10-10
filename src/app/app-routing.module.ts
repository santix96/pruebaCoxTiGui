import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NotFoundComponent} from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registerUser',  
    loadChildren: () => import('./pages/register-user/register-user.module').then(m => m.RegisterUserModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'residential',
    loadChildren: () => import('./pages/residential/residential.module').then(m => m.ResidentialModule)
  },
  {
    path: 'financial',
    loadChildren: () => import('./pages/financial/financial.module').then(m => m.FinancialModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: '**',
    component: NotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
