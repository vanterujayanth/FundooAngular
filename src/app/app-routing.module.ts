import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { DemoComponent } from './Component/demo/demo.component';
import { JayanthComponent } from './Component/jayanth/jayanth.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { AddNotesComponent } from './Component/add-notes/add-notes.component';
import { GetNotesComponent } from './Component/get-notes/get-notes.component';
import { TrashComponent } from './Component/trash/trash.component';
import { ArchiveComponent } from './Component/archive/archive.component';
import { AuthService } from './services/shared/auth.service';
import { DispliayComponent } from './Component/displiay/displiay.component';
import { ChatComponent } from './Component/chat/chat.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'reset',component:ResetPasswordComponent},
  {path:'Demo',component:DemoComponent},
  {path:'jayanth',component:JayanthComponent},
  {path:'display',component:DispliayComponent},
  {path:'ram',component:GetNotesComponent},
  {path:'chat',component:ChatComponent},
  {path:'dashboad',component:DashboardComponent,
  canActivate:[AuthService],

  children:[
    // {path:'',redirectTo:"dashboad/notes",pathMatch:'full'},
    {path:'notes',component:GetNotesComponent},
    // {path:'display',component:GetNotesComponent},
    {path:'trash',component:TrashComponent},
    {path:'archive',component:ArchiveComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
