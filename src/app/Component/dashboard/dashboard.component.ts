import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../../services/Dataservice/data.service';
//import { Route } from '@angular/router';
//import { Router } from 'express';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  filterNote:any;
 
  constructor(private router:Router,private data :DataService){}
  ngOnInit(): void {
    // this.data.incomingData.subscribe ((response) => {
    //   console.log("Search in process", response);
    //   this.filterNote = response;
    // })
  }
  
  
Trash()
{
  console.log("trash")
   this.router.navigate(['/dashboad/trash'])
}
Archive()
{
  this.router.navigate(['/dashboad/archive'])
}

noteses()
{
  this.router.navigate(['/dashboad/notes'])
}
search(event:any)
  {
    console.log(event.target.value)
    this.data.OutgoingData(event.target.value)
  }
}
