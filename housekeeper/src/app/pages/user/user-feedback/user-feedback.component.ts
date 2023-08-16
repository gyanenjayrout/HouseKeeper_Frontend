import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedbackServiceService } from 'src/app/services/feedback-service.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css']
})
export class UserFeedbackComponent implements OnInit{
  public feedback = {
    housekeeperId:'',
    housekeeperName:'',
    rateService:'',
    timein:'',
    timeout:'',
    suggestions:'',
    complaints:''

  };
  constructor(private feedbackService: FeedbackServiceService,private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    
  }
  /*formSubmit(): void{
   // console.log(this.feedback);
    this.feedbackService.addFeedback(this.feedback).subscribe({
      next: (data: any) => {
        console.log(data);
       swal('Request sent Succesfully')
      },
      error: (error: any) => {
        console.log(error);
        
        this.snackBar.open('request not sent','',
      {
        duration:3000,
        
      })
      },
  });
}*/
formSubmit(): void {
  this.feedbackService.addFeedback(this.feedback).subscribe({
    next: (data: any) => {
      console.log(data);
      swal('Request sent Successfully');
    },
    error: (error: any) => {
      console.error('Error:', error);
      if (error instanceof HttpErrorResponse) {
        console.error('Response:', error.error);

        try {
          const responseError = JSON.parse(error.error.text);
          console.error('Response Error:', responseError);
        } catch (parseError) {
          console.error('Error parsing response:', parseError);
          console.error('Response Text:', error.error.text); // Log the raw response text
        }
      }

      this.snackBar.open('Request not sent', '', {
        duration: 3000,
      });
    },
  });
}



 
}
