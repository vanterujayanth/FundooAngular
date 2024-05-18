import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserServicesService } from '../../services/User_services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit  {
  forgotForm! :FormGroup;
 submitted=false;
 constructor(private formBuilder :FormBuilder,private user:UserServicesService){}
 
 ngOnInit(): void {
   this.forgotForm= this.formBuilder.group({
     Email: ['' ],
    
 })
}
onForgot(){
  this.submitted=true;
  if(this.forgotForm.valid){
    let reqData={
      Email:this.forgotForm.value.Email,
      
    }
    this.user.forgot(reqData).subscribe((response:any)=>{
      console.log(response);
     // localStorage.setItem("token",response.data);
      
    })
  }
}

}
