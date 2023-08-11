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
    housekeeper_id:'',
    rate_service:'',
    timein:'',
    timeout:'',
    suggestions:'',
    complaints:''

  };
  constructor(private feedbackService: FeedbackServiceService,private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  formSubmit(): void{
    console.log(this.feedback);
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
}

 
}
