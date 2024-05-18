import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpservices/http.service';
import { HttpHeaders } from '@angular/common/http';
import { log } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any;


  constructor(private httpservice:HttpServicesService) {
    this.token=localStorage.getItem('token')
   }
   addNotes(reqData:any)
   {
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.postServiceReset('https://localhost:7068/api/Notes/CreateNotes',reqData,true,header);
   }

   getNotes()
   {
    //const Userid =reqData.Userid;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
   // https://localhost:7068/api/Notes/GetNotesByUserId?userid=1
   // return this.httpservice.getService('https://localhost:7068/api/Notes/GetNotesByUserId?userid=',true,header);
   return this.httpservice.getService('https://localhost:7068/api/Notes/GetAllNotes',true,header);
   }
  

   trashNotes(reqData:any)
   {
    
    const noteId=reqData.noteId
    //const noteid
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }

    return this.httpservice.puttService(`https://localhost:7068/api/Notes/GoogleTrash?noteid=${noteId}`,reqData,true,header);
   // https://localhost:7068/api/Notes/GoogleTrash?noteid=1
   }
   archiveNotes(reqData:any){
    const noteid=reqData.noteid;
    const header={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.postService(`https://localhost:7068/api/Notes/GoggleArchive?noteid=${noteid}`,reqData,true,header);

    //return this.httpservice.puttService(`https://localhost:7068/api/Notes/GoggleArchive?noteid=${noteId}`, reqData, true, header);
   }
   

   updateNotes(reqData: any, noteId: any) {
    const Userid=reqData.Userid;
   // console.log(Userid);
    let header = {
        headers: new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        })
    };
    return this.httpservice.puttService(` https://localhost:7068/api/Notes/UpdateNotes?Noteid=${noteId}`, reqData, true, header);
   // return this.httpservice.puttService(`https://localhost:7068/api/Notes/UpdateNotes?Noteid=${noteId}`, reqData, true, header);
   // https://localhost:7068/api/Notes/UpdateNotes?Userid=1&Noteid=1 
}


notesColor(reqData:any)
{
  console.log(reqData)
  const noteId=reqData.noteId;
    const color=reqData.color;
    
  let header = {
    headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpservice.postService(`https://localhost:7068/api/Notes/AddColour?noteid=${noteId}&color=${color}`, reqData, true, header);
   // return this.httpservice.postService('https://localhost:7068/api/Notes/AddColour?noteid=${noteId}&color='+reqData.color,{},false,header)
  }

}

