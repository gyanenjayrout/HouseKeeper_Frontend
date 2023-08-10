import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public user = {
    username: '',
    password: '',
    name: '',
    room: '',
    floorno: '',
    hostelname: '',
    
  };
  constructor(private userService: UserService,private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    
  }


  formSubmit(): void {
    console.log(this.user);

    if (this.user.username === '' || this.user.username === null) {
      this.snackBar.open('Username is required','',
      {
        duration:3000,
        // verticalPosition:'top',
        // horizontalPosition:'center',
      })
      return;
    }

    this.userService.adduser(this.user).subscribe({
      next: (data: any) => {
        console.log(data);
        swal('User '+data.username +' Registerd Succesfully')
      },
      error: (error: any) => {
        console.log(error);
        
        this.snackBar.open('Username already Registerd','',
      {
        duration:3000,
        
      })
      },
      
    });


}
}
