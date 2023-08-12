import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserRequestService } from 'src/app/services/user-request.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-admin-view-request',
  templateUrl: './admin-view-request.component.html',
  styleUrls: ['./admin-view-request.component.css']
})
export class AdminViewRequestComponent implements OnInit
 {
  requests: any[] = [];
  constructor(private request: UserRequestService, private snack: MatSnackBar) {}

  ngOnInit(): void {
    this.viewRequests();
    
  }
  viewRequests()
  {
    this.request.getRequest().subscribe({
      next: (data: any) => {
        this.requests = data;
        
        console.log(this.requests);
      },
      error: (error: any) => {
        console.log(error);
        swal('Error !!', 'Error in loading data ', 'error');
      }
    });
  }
  
    serveRequest(request: any) {
      // Toggle the 'served' property
      request.served = !request.served;
  
      // You can perform any additional actions here, like showing a message
      if (request.served) {
        this.snack.open('Request served!', 'Dismiss', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    }

}
