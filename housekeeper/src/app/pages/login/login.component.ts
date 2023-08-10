import { Component ,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginservicService } from 'src/app/services/loginservic.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private snack:MatSnackBar,private login:LoginservicService, private router: Router)
  {

  }
loginData  = 
{
  username:'',
  password:''
}


  ngOnInit(): void {

    
  }



  formSubmit()
  {
    console.log("form submitted");
    
    if(this.loginData.username.trim()==''||this.loginData.username==null)
    {
      this.snack.open('Username is required !!','',
      {
        duration:3000,
      })
    }
    if(this.loginData.password.trim()==''||this.loginData.password==null)
    {
      this.snack.open('Password is required !!','',
      {
        duration:3000,
      })
    }
//generate token

    this.login.generateToken(this.loginData).subscribe({
     next: (data:any)=>
      {
        console.log('success');
        console.log(data);
        //login
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>
          {
            this.login.setUser(user);
            console.log(user);


            if (this.login.getUserROle() === 'ADMIN') {
              this.router.navigate(['/admin']); // Corrected router link
              this.login.loginStatusSubject.next(true);
            } else if (this.login.getUserROle() === 'NORMAL') {
              this.router.navigate(['/user']); // Corrected router link
              this.login.loginStatusSubject.next(true);

            } else {
              this.login.logout();
            }
            
          }

          

        )
      },
      error:(error)=>
      {
        console.log('Error!');
        console.log(error);
         
        this.snack.open('Wrong Password','',
      {
        duration:3000,
        
      })
        
      }}
    )


 
    
}
}

