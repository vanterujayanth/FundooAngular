import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServicesService } from '../../services/User_services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  resetForm! :FormGroup;
 submitted=false;
 constructor(private formBuilder :FormBuilder,private user:UserServicesService){}
 
 ngOnInit(): void {
   this.resetForm= this.formBuilder.group({
    confirmPassword: ['' ],
    
 })
}
onReset(){
  this.submitted=true;
  if(this.resetForm.valid){
    let reqData={
      email:this.resetForm.value.confirmPassword,
      
    }
    this.user.reset(reqData).subscribe((response:any)=>{
      console.log(response);
     //localStorage.setItem("token",response.data);
      
    })
  }

}
}
