import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from '../../services/notes_services/notes.service';
import { ActivatedRoute } from '@angular/router';
// import EventEmitter from 'node:events';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrl: './add-notes.component.scss'
})
export class AddNotesComponent  {
  @Output() refreshEvent =new EventEmitter<string>();
 notesForm!:FormGroup;
 submitted = false;
 display=true;
 token :any;

  constructor(private formBuilder: FormBuilder, private notes:NotesService,private activateRoute: ActivatedRoute ) {} 

 ngOnInit(): void {
   this.notesForm = this.formBuilder.group({
    Title : ['',Validators.required ],
    Description: ['',Validators.required]
   });
 }

  onNote()
  {
    this.submitted = true;
    if (this.notesForm.valid) {
      const reqData = {
        Title: this.notesForm.value.Title,
        Description: this.notesForm.value.Description
      };
      console.log(reqData);
      this.notes.addNotes(reqData).subscribe((response: any) => {
        console.log(response);
        this.refreshEvent.emit(response);
      });
    }
    this.display=true;
  }

}
