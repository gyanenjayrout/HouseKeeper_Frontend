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
