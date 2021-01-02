import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorGetComponent } from './doctor/doctor-get/doctor-get.component';
import { DoctorAddComponent } from './doctor/doctor-add/doctor-add.component';
import { DoctorUpdateComponent } from './doctor/doctor-update/doctor-update.component';
import { UserGetComponent } from './user/user-get/user-get.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { MedGetComponent } from './user/med-get/med-get.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    DoctorComponent,
    DoctorGetComponent,
    DoctorAddComponent,
    DoctorUpdateComponent,
    UserGetComponent,
    UserAddComponent,
    MedGetComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
