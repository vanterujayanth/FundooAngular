import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../../services/notes_services/notes.service';
import { response } from 'express';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrl: './updatenote.component.scss'
})
export class UpdatenoteComponent implements OnInit{
  Title:any;
  Description:any;
  id:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
public dialogbox:MatDialogRef<UpdatenoteComponent>,
private notes:NotesService) {
  this.Title = data.title,
  this.Description=data.description,
  this.id=data.noteid
 }

  ngOnInit(): void {
  }
closeDialog(){
  let reqData ={
    Title:this.Title,
    Description:this.Description,
  }
  this.notes.updateNotes(reqData,this.id).subscribe((response:any)=>{
    console.log(response);
    this.dialogbox.close();
  });
}
}
