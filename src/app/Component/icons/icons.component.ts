import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes_services/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent implements OnInit {
@Input() notesObject:any
constructor(private notes:NotesService){}

ngOnInit(): void {
  
}
onDelete(){
  let reqData={
    noteid:this.notesObject.noteId
  }
  console.log("req",reqData);
  this.notes.trashNotes(reqData).subscribe((response:any)=>{
    console.log("Notes trashed successfully",response);
  })
}
onArchive()
{
  let reqData={
    notesId:this.notesObject.noteId
  }
  console.log(reqData);
  this.notes.archiveNotes(reqData).subscribe((response:any)=>{
    console.log("Success",response);
  })
}

colorArray: Array<any> =[

  {code:'#ffffff', name:'white'},
  {code:'#FF6374', name:'Tomato'},
  {code:'#FF4500', name:'OrangeRed'},
  {code:'#FFFF00', name:'yellow'},
  {code:'#ADFF2F', name:'greenyellow'},
  {code:'#B0C4DE', name:'LightSteelBlue'},
  {code:'#EEE8AA', name:'paleGoldenRed'},
  {code:'#7FFFD4', name:'Aquamarine'},
  {code:'#FFE4C4', name:'Bisque'},
  {code:'#C0C0C0', name:'Silver'},
  {code:'#BC8F8F', name:'RosyBrown'},
  {code:'#D3D3D3', name:'grey'}
];

selectcolor(colors:any){
  let reqData={
    color:colors.name,
    noteId:this.notesObject.noteId
  }
  this.notes.notesColor(reqData).subscribe((response:any)=>{
    console.log(response)
    
  })
}

}





