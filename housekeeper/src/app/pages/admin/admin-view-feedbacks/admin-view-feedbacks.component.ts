import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedbackServiceService } from 'src/app/services/feedback-service.service';
import  swal from 'sweetalert';

@Component({
  selector: 'app-admin-view-feedbacks',
  templateUrl: './admin-view-feedbacks.component.html',
  styleUrls: ['./admin-view-feedbacks.component.css']
})
export class AdminViewFeedbacksComponent implements OnInit
{

  feedbacks: any[] = [];
  ngOnInit(): void {
    this.viewFeedbacks();
  }
  constructor(private request: FeedbackServiceService, private snack: MatSnackBar) {}

  viewFeedbacks()
  {
    this.request.getFeedbacks().subscribe({
      next: (data: any) => {
        this.feedbacks = data;
        
        console.log(this.feedbacks);
      },
      error: (error: any) => {
        console.log(error);
        swal('Error !!', 'Error in loading data ', 'error');
      }
    });
  }
}
