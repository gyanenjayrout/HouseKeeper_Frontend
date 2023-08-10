import { Component, OnInit } from '@angular/core';
import { LoginservicService } from 'src/app/services/loginservic.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user= null;

  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUSer();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>
    {
      this.isLoggedIn= this.login.isLoggedIn();
      this.user=this.login.getUSer();
    })
  }

  constructor(public login:LoginservicService)
  {}

  public logout()
  {
    this.login.logout();
    
    this.login.loginStatusSubject.next(false);
  }



}

