import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpservices/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
token:any
   constructor(private httpService:HttpServicesService) { }
   register(reqData:any){
    let header ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService('https://localhost:7068/api/User/Register',reqData,false,header)
  }

  login(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
      })
    }
    return this.httpService.postService('https://localhost:7068/api/User/Login',reqData,false,header)
  }


  forgot(reqData:any)
  {
let header={
  headers:new HttpHeaders({

  })
}
return this.httpService.postService('https://localhost:7068/api/User/ForgotPassword?Email='+reqData.Email,{},false,header)
  }

  reset(reqData:any)
  {
let header={
  headers:new HttpHeaders({

  })
}
return this.httpService.postServiceReset('https://localhost:7068/api/User/ResetPassword',reqData,false,header)
  }
}
