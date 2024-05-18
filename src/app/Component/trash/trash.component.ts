import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes_services/notes.service';
import { response } from 'express';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss'
})
export class TrashComponent implements OnInit{
  trashList:any;
  array:any;
constructor(private notes:NotesService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.onDelete()
  }
onDelete()
{
this.notes.getNotes().subscribe((response:any)=>{
console.log(response)
this.trashList=response.data;
console.log("trashlistdtaata",this.trashList);

this.array=this.trashList.filter((Object:any)=>{
  return Object.isTrash;
})
console.log("trashlist",this.array);
})

}
restore()
{
  // let reqData ={
  //   noteId:this.notes.noteId
  // }
  // console.log(reqData)
  // this.notes.trashNotes(reqData).subscribe((response:any)=>{
  //   console.log(response)
  // })
}
}
