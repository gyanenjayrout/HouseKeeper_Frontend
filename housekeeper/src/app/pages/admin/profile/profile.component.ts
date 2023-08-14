import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginservicService } from 'src/app/services/loginservic.service';
import  swal from 'sweetalert';

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

  constructor(private login:LoginservicService, private router:Router)
  {

  }

  updateprofile()
  {
    
    this.login.updateCureentUser( this.user).subscribe({
    
      next:(data:any)=>{
        swal('SuccesFully Updated').then((e)=>
        {
          this.router.navigate(['/admin'])
        })
        console.log(data);

      
      }
      ,error:(error: any)=>{
        console.log(error);
        swal('Server Error !!')
        
      }
    })
  }
}
