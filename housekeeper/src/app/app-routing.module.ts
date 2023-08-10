import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import { adminGuard } from './services/admin.guard';

import { normalGuard } from './services/normal.guard';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';

const routes: Routes = [
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
   },
 
   {
     path:'login',
    component:LoginComponent,
    pathMatch:'full'
 
   },
   {
    path:'admin',
    component:AdminDashboardComponent,
    pathMatch:'full',
    canActivate:[adminGuard]
  
   },
   {
    path:'user',
    component:UserdashboardComponent,
    pathMatch:'full',
    canActivate:[normalGuard]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
