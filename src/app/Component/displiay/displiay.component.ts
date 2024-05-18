import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes_services/notes.service';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../services/Dataservice/data.service';

@Component({
  selector: 'app-displiay',
  templateUrl: './displiay.component.html',
  styleUrl: './displiay.component.scss'
})
export class DispliayComponent implements OnInit {
  @Input() notesList:any;
  filterNote:any;
  constructor(private notes:NotesService,public dialog:MatDialog,private dataserveces:DataService){}

  ngOnInit(): void
   {
   
    this.dataserveces.incomingData.subscribe((response)=>{
            console.log("Search in process", response);
             this.filterNote=response;
    
  })

   }
}
