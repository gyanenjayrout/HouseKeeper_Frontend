import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import { adminGuard } from './services/admin.guard';

import { normalGuard } from './services/normal.guard';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { CleanRequestComponent } from './pages/user/clean-request/clean-request.component';

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
    canActivate:[adminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent,
      }
    ]
   },
   {
    path:'user',
    component:UserdashboardComponent,
    
    canActivate:[normalGuard],
    children:[
      {
        path:'clean-req',
        component:CleanRequestComponent,
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
