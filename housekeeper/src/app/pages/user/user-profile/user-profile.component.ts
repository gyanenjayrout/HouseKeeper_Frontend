import { Component, OnInit } from '@angular/core';
import { LoginservicService } from 'src/app/services/loginservic.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit
{
  user:any='';
  ngOnInit(): void {
    this.user = this.login.getUSer();
    //throw new Error('Method not implemented.');
  }
  constructor(private login:LoginservicService)
  {

  } 
}
