import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserRequestService } from 'src/app/services/user-request.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-clean-request',
  templateUrl: './clean-request.component.html',
  styleUrls: ['./clean-request.component.css']
})
export class CleanRequestComponent implements OnInit {


  public request ={
    
    date: '',
   cleaningtime: '',  // Using string for time, you can use a custom pipe for formatting
  roomno: '',
   floorno: '',
  hostelname: '',


  }
  ngOnInit(): void {
    
  }

  constructor(private sendreq:UserRequestService, private snack:MatSnackBar)
  {

  }

reqSubmit()
{
  // if(this.request.cleaningtime === '' || this.request.cleaningtime === null||this.request.roomno==""||this.request.roomno==null)
  // {
  //   this.snack.open('cleaningtime is required','',
  //     {
  //       duration:3000,
  //       // verticalPosition:'top',
  //       // horizontalPosition:'center',
  //     })
  //     return;
  // }
  this.sendreq.sendRequest(this.request).subscribe({
    next: (data: any) => {
      console.log(data);
      swal('User '+data.username +' Request Submitted')
    },
    error: (error: any) => {
      console.log(error);
      
      this.snack.open('Server Error','',
    {
      duration:3000,
      
    })
    },
    
  });


}


}
