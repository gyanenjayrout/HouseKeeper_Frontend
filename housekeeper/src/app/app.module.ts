import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input'; 
 import {MatExpansionModule} from '@angular/material/expansion'; 
 import { FormsModule } from '@angular/forms';
 import {MatButtonModule} from '@angular/material/button'; 
 import { HttpClientModule } from '@angular/common/http';
 import {MatSnackBarModule} from '@angular/material/snack-bar';
 import {MatCardModule} from '@angular/material/card'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';

import { authInterceptorProviders } from './pages/authinterceptor.interceptor';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import {MatListModule} from '@angular/material/list';



import {MatDividerModule} from '@angular/material/divider'; 
import {MatSelectModule} from '@angular/material/select';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { CleanRequestComponent } from './pages/user/clean-request/clean-request.component';
import { UserFeedbackComponent } from './pages/user/user-feedback/user-feedback.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { AdminViewRequestComponent } from './pages/admin/admin-view-request/admin-view-request.component';
import { AddHouseKeeperComponent } from './pages/admin/add-house-keeper/add-house-keeper.component'; 
import { AdminViewFeedbacksComponent } from './pages/admin/admin-view-feedbacks/admin-view-feedbacks.component';
import { ViewDashboardComponent } from './pages/admin/view-dashboard/view-dashboard.component';
import { ViewHousecleanerComponent } from './pages/user/view-housecleaner/view-housecleaner.component';
import { SendAlertComponent } from './pages/admin/send-alert/send-alert.component';
import { UpdateHousecleanerComponent } from './pages/admin/update-housecleaner/update-housecleaner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
  
    
    AdminDashboardComponent,
    SidebarComponent,
    UserdashboardComponent,
    ProfileComponent,
    UserSidebarComponent,
    CleanRequestComponent,
    UserFeedbackComponent,
    UserProfileComponent,
    AdminViewRequestComponent,
    AddHouseKeeperComponent,
    AdminViewFeedbacksComponent,
  
    ViewDashboardComponent,
    ViewHousecleanerComponent
    ,SendAlertComponent, UpdateHousecleanerComponent, 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule, MatInputModule,
    MatExpansionModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
     MatSnackBarModule,
     MatSnackBarModule,
     MatCardModule,
     MatToolbarModule,MatIconModule,MatListModule,MatDividerModule,MatSelectModule
     
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
