import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServicesService } from '../../services/User_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm! :FormGroup;
  sibmitted=false;
  constructor(private formbuilder : FormBuilder,private user:UserServicesService){}


  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      email: ['' ],
      password: [''],
      confirm:['']
  })
  }


onRegister(){debugger
  this.sibmitted=true;
  if(this.registerForm.valid){
    let reqData={
      firstName:this.registerForm.value.firstName,
      lastName:this.registerForm.value.lastName,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password
    }
    this.user.register(reqData).subscribe((response:any)=>{
      console.log("Register Successfull");
      console.log(response);
      localStorage.setItem("token",response.data);
      
    });
}

}

}