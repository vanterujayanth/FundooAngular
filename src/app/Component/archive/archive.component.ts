import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes_services/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent  implements OnInit{
  archievNotes:any;
  array:any;
constructor(private notes:NotesService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.onarchiev()
  }
onarchiev()
{
this.notes.getNotes().subscribe((response:any)=>{
console.log(response)
this.archievNotes=response.data;
console.log("archievNotesdtaata",this.archievNotes);

this.array=this.archievNotes.filter((Object:any)=>{
  return Object.isArchive;
})
console.log("archievNotes",this.array);
})

}
}
