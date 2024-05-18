import { Component ,EventEmitter,Input, OnInit, Output} from '@angular/core';
import { NotesService } from '../../services/notes_services/notes.service';

import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { MatDialog } from '@angular/material/dialog';

import { DataService } from '../../services/Dataservice/data.service';
import { response } from 'express';


@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrl: './get-notes.component.scss'
  
})
export class GetNotesComponent implements OnInit {
  constructor(private notes:NotesService){}
  notesArray!:any;
   ngOnInit(): void {
     this.onSubmit()
   }
   onSubmit(){
    console.log("Hello");
    this.notes.getNotes().subscribe((response:any)=>{
      this.notesArray=response.data;
    })
    this.notes.getNotes().subscribe((response:any)=>{
      console.log(response);
      this.notesArray=response.data;
      console.log("stored to arry variable")
      console.log(this.notesArray);
    })
  }
  creates($event:any)
  {
this.onSubmit();
  }
  updates($event:any)
  {
    this.onSubmit();
  }
}

//   @Input() notesList:any;
//    @Output()updateAutoRefresh = new EventEmitter<string>();
//   constructor(private notes:NotesService,public dialog:MatDialog,private dataserveces:DataService){}
//   notesArray:any;
//   filterNote:any;
//    ngOnInit(): void {
//     this.dataserveces.incomingData.subscribe((response)=>{
//       console.log("Search in process", response);
//       this.filterNote=response;
//       // this.Onnotes()
//     })
//     // this.dataservice.IncomingData.subscribe((response) => {
//     //   console.log("Search in process", response);
//     //   this.filterNote = response;
//     // })
//     //  this.Onnotes()
//    }
//    Onnotes(){
//     console.log("Hello");
//     this.notes.getNotes().subscribe((response:any)=>{
//       console.log(response);
//       this.notesArray=response.data;
//       this.notesList=this.notesArray
//       console.log("stored to arry variable")
//       console.log(this.notesArray);
//     })
//    }
//    editNotesDialogBox(notes:any)
//    {
//     const dialogbox =this.dialog.open(UpdatenoteComponent,{
//       width:'40%',
      
//       height:'auto',
//       data:notes
//     })
//     console.log(notes.noteId);
// dialogbox.afterClosed().subscribe(result=>{
//   console.log(result);
//    this.updateAutoRefresh.emit(result);
// })
//    }
