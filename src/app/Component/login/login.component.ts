import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from '../../services/User_services/user.service';
//import { Router, response } from 'express';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit  {
 loginForm! :FormGroup;
submitted=false;
constructor(private formBuilder :FormBuilder,private user:UserServicesService, private router:Router,private matbar:MatSnackBar ){}

ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    email: ['',[Validators.required,Validators.email] ],
    password: ['',[Validators.required]]
})
  // loginForm= new FormGroup({
  //      email:new FormControl(""),
  //      password:new FormControl("")
  //    })
}
  // loginForm= new FormGroup({
  //   email:new FormControl(""),
  //   password:new FormControl("")
  // })

onSubmit(){
  this.submitted=true;
  if(this.loginForm.valid){
    let reqData={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    this.user.login(reqData).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem("token",response.data)
      // this.router.navigate(["/dash"])
      this.matbar.open("login sucessfull.....", '',{
        duration:3000
      })
      this.router.navigate(["dashboad/notes"])
      
    })
  }
}
}
