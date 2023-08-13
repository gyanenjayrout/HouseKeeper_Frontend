import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddHousecleanerServicesService } from 'src/app/services/add-housecleaner-services.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-house-keeper',
  templateUrl: './add-house-keeper.component.html',
  styleUrls: ['./add-house-keeper.component.css']
})
export class AddHouseKeeperComponent  implements OnInit{
  ngOnInit(): void {
    
  }

   housecleanerr ={
    hname:'',
		status:'',
		timing :'',
		
  }

  constructor(private housecleaner:AddHousecleanerServicesService, private snack:MatSnackBar)
  {

  }

  addHousecleaner()
  {
    this.housecleaner.addHousekeeper(this.housecleanerr).subscribe({
      next: (data: any) => {
        console.log(data);
        swal('User '+data.hname +' House cleaner added Succefully')
      },
      error: (error: any) => {
        console.log(error);
        
        this.snack.open('Serveer Errror','',
      {
        duration:3000,
        
      })
      },
      
    });
  }

}
