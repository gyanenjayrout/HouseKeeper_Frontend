import { UserFeedbackComponent } from './pages/user/user-feedback/user-feedback.component';
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
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { AdminViewRequestComponent } from './pages/admin/admin-view-request/admin-view-request.component';
import { AddHouseKeeperComponent } from './pages/admin/add-house-keeper/add-house-keeper.component';
import { AdminViewFeedbacksComponent } from './pages/admin/admin-view-feedbacks/admin-view-feedbacks.component';
import { ViewDashboardComponent } from './pages/admin/view-dashboard/view-dashboard.component';
import { ViewHousecleanerComponent } from './pages/user/view-housecleaner/view-housecleaner.component';
import { SendAlertComponent } from './pages/admin/send-alert/send-alert.component';
import { UpdateHousecleanerComponent } from './pages/admin/update-housecleaner/update-housecleaner.component';

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
      },
      {
        path:'view-requests',
        component:AdminViewRequestComponent,
      },
      {
        path:'add-housekeepers',
        component:AddHouseKeeperComponent,
      },
      {
        path:'view-feedbacks',
        component:AdminViewFeedbacksComponent,
      },
      {
        path:'sen-alert/:hid/:hname ',
        component:SendAlertComponent
      },
      {
        path:'update-housecleaner/:hid',
        component:UpdateHousecleanerComponent

      },


      {
        path:'view-dashboard',
        component:ViewDashboardComponent
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
      },
      {
        path:'user-feedback',
        component:UserFeedbackComponent,
      },
      {
        path:'user-profile',
        component:UserProfileComponent,
      },
      {
        path:'view-cleaner',
        component:ViewHousecleanerComponent
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
