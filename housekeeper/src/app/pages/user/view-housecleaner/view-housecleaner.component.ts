import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertServicesService } from 'src/app/services/alert-services.service';
import  swal from 'sweetalert';
interface Alerts {aid:'',
  roomno:'',
    floorno:'',
     hostelname :'',
    cleaningtime :'',
   date :'',
   housekeepername :'',
   housekeeperid:''
   
  // Add other properties as needed
}
@Component({
  selector: 'app-view-housecleaner',
  templateUrl: './view-housecleaner.component.html',
  styleUrls: ['./view-housecleaner.component.css']
})
export class ViewHousecleanerComponent implements OnInit {
  ngOnInit(): void {
    this.viewCleaner();
  }
  Alerts: Alerts[] = [];

  constructor(private snack:MatSnackBar, private alerts:AlertServicesService)
  {

  }

  viewCleaner()
  {
    this.alerts.getAllAlerts().subscribe({
      next: ((data: any) => {
        console.log(data, "alerts");
        this.Alerts = data;
      }),
      error: (error) => {
        console.log(error);
        swal('Server Error, Unable to Fetch Data');
      }
    });
  }




}
