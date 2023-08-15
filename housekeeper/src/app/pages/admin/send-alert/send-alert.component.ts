import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AlertServicesService } from 'src/app/services/alert-services.service';
import swal from 'sweetalert';
import { AddHouseKeeperComponent } from '../add-house-keeper/add-house-keeper.component';
import { AddHousecleanerServicesService } from 'src/app/services/add-housecleaner-services.service';
interface HouseKeeper {
  hid: string;
  hname:string; // Change the data type to match the actual type of 'qid'
  // Add other properties as needed for the quiz
  
}
@Component({
  selector: 'app-send-alert',
  templateUrl: './send-alert.component.html',
  styleUrls: ['./send-alert.component.css']
})
export class SendAlertComponent implements OnInit {
 
hid:any;
hname:any;
  activeRoter: any;


 alert={
  housekeeper:{} as HouseKeeper,
  roomno:'',
   floorno:'',
  hostelname:'',
   cleaningtime:'',
   date:'',
   housekeepername:'',
   housekeeperid:''
 }
  allHouseCleaners: any;
 

  ngOnInit(): void {
    this.hid = this.activeRoute.snapshot.params['hid'];
    console.log(this.hid );
    
    this.alert.housekeeper.hid = this.hid;
    
    console.log(this.alert.housekeeper.hid);
    this.hname = this.activeRoute.snapshot.params['hname'];
    console.log(this.activeRoute.snapshot.params['hname']);

    this.alert.housekeeper.hname=this.hname;
    this.alert.housekeepername=this.hname;
    console.log(this.alert.housekeepername);
    this.viewDashboard();

    
  }



  constructor( private sendAlert:AlertServicesService, private snack:MatSnackBar, private activeRoute:ActivatedRoute, private viewdashboard:AddHousecleanerServicesService)
  {

  }

  sendAlerts()
  {

   
    this.sendAlert.sentAlert(this.alert).subscribe({
      next:(data)=>
      {
        console.log(data);
        swal('Success','Successfully Alerted !!');
        this.alert={
          housekeeper:{} as HouseKeeper,
          roomno:'',
           floorno:'',
          hostelname:'',
           cleaningtime:'',
           date:'',
           housekeepername:'',
           housekeeperid:''
           
         }
         
      },
      error :(error :any)=>
      {
        swal(' Error in Alerting !!')
      }
    })
    
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


