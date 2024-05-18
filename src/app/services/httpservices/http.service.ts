import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(private httpclient:HttpClient) { }
  postService(url:string,reqData:any,token:boolean=false,httpOption:any={}){
    return this.httpclient.post(url,reqData,token&&httpOption)
  }
  postServiceReset(url:string,reqData:any,token:boolean=true,httpOption:any={}){
    return this.httpclient.post(url,reqData,token&&httpOption)
  }
 getService(url:string,token:boolean=true,httpOption:any={}){
    return this.httpclient.get(url,token&&httpOption)
  }
  puttService(url:string,reqData:any,token:boolean=true,httpOption:any={}){
    return this.httpclient.put(url,reqData,token&&httpOption)
  }
}
