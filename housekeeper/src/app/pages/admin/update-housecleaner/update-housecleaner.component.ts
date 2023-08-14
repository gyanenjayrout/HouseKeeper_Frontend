import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AddHousecleanerServicesService } from 'src/app/services/add-housecleaner-services.service';
import  swal from 'sweetalert';

@Component({
  selector: 'app-update-housecleaner',
  templateUrl: './update-housecleaner.component.html',
  styleUrls: ['./update-housecleaner.component.css']
})
export class UpdateHousecleanerComponent implements  OnInit  {


  cleaner: any = {};
  housecleanerr ={
    hname:'',
		status:'',
		timing :'',
		
  }
  Hid: any;
  ngOnInit(): void {
    this.Hid=this.activatedRoute.snapshot.params['hid'];


    

   this.housecleaner.viewHouseKeeperById(this.Hid).subscribe({
    next:(data)=>
    {
      this.cleaner=data;
      console.log(this.cleaner);
      
    },
    error:(error)=>
    {
      console.log(error);
      swal('Error !!', 'Error in loading data ', 'error');
    }
   })
  
  }

  constructor(private router:Router,private housecleaner:AddHousecleanerServicesService,private activatedRoute:ActivatedRoute, private snack:MatSnackBar)
  {

  }
  
  updateQuiz()
  {
    
    this.housecleaner.updateHousekeeper(this.cleaner).subscribe({
    
      next:(data:any)=>{
       swal('SuccesFully Updated').then((e)=>
        {
          this.router.navigate(['/admin/view-dashboard'])
        })
        console.log(data);

      
      }
      ,error:(error: any)=>{
        console.log(error);
        swal('Server Error !!')
        
      }
    })
  }

  





}
