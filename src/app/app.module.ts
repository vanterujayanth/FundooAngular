import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisterComponent } from './Component/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LoginComponent } from './Component/login/login.component';
import { DemoComponent } from './Component/demo/demo.component';
import { HttpClientModule } from '@angular/common/http';
import { JayanthComponent } from './Component/jayanth/jayanth.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { IconsComponent } from './Component/icons/icons.component';
import { AddNotesComponent } from './Component/add-notes/add-notes.component';
import { GetNotesComponent } from './Component/get-notes/get-notes.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { TrashComponent } from './Component/trash/trash.component';
import { ArchiveComponent } from './Component/archive/archive.component';
import { UpdatenoteComponent } from './Component/updatenote/updatenote.component';
import { AuthService } from './services/shared/auth.service';
import { FilterPipe } from './pipe/filter.pipe';
import { DispliayComponent } from './Component/displiay/displiay.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ChatComponent } from './Component/chat/chat.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DemoComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    JayanthComponent,
    DashboardComponent,
    IconsComponent,
    AddNotesComponent,
    GetNotesComponent,
    TrashComponent,
    ArchiveComponent,
    UpdatenoteComponent,
    FilterPipe,
   DispliayComponent,
   ChatComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
     MatMenuModule,
     MatDialogModule,
     MatSnackBarModule,
     MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
