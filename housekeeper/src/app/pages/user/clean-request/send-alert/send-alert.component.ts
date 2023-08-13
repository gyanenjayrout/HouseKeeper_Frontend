import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AlertServicesService } from 'src/app/services/alert-services.service';
import swal from 'sweetalert';
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
   housekeepername:''
 }
 

  ngOnInit(): void {
    this.hid = this.activeRoute.snapshot.params['hid'];
    console.log(this.hid );
    this.alert.housekeeper.hid = this.hid;
    
    console.log(this.alert.housekeeper.hid);
    this.hname = this.activeRoute.snapshot.params['hname'];

    this.alert.housekeeper.hname=this.hname;
    this.alert.housekeepername=this.hname;
    console.log(this.alert.housekeepername);
    

    
  }

  constructor( private sendAlert:AlertServicesService, private snack:MatSnackBar, private activeRoute:ActivatedRoute)
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
           housekeepername:''
           
         }
         
      },
      error :(error :any)=>
      {
        swal(' Error in Alerting !!')
      }
    })
    
  }



  }


