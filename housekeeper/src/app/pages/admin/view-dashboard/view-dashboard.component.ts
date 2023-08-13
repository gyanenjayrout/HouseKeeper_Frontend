import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddHousecleanerServicesService } from 'src/app/services/add-housecleaner-services.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css']
})
export class ViewDashboardComponent implements OnInit {
  allHouseCleaners: any[] = [];
  ngOnInit(): void {
    this.viewDashboard();
  }
  constructor(private viewdashboard:AddHousecleanerServicesService, private snack:MatSnackBar)
  {

  }

  viewDashboard()
  {
    this.viewdashboard.viewHoseKeepeer().subscribe({
      next: (data: any) => {
        this.allHouseCleaners = data;
        
        console.log(this.allHouseCleaners);
      },
      error: (error: any) => {
        console.log(error);
        swal('Error !!', 'Error in loading data ', 'error');
      }
    });

  }

 
}
