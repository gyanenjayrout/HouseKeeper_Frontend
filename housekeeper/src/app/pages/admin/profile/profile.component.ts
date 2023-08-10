import { Component, OnInit } from '@angular/core';
import { LoginservicService } from 'src/app/services/loginservic.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any=''
  ngOnInit(): void {
     this.user = this.login.getUSer();
    // this.login.getCurrentUser().subscribe({
    //   next:(user:any)=>
    //   {
    //     this.user=user;
    //   },
    //   error:(error)=>
    //   {
    //     console.log('Error!');
    //     console.log(error);
    //   }
    // })
   
  }

  constructor(private login:LoginservicService)
  {

  }
}
