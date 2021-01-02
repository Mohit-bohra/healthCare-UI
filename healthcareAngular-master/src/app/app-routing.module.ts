import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { AdminComponent } from './admin/admin.component';
import { DoctorGetComponent } from './doctor/doctor-get/doctor-get.component';
import { DoctorAddComponent } from './doctor/doctor-add/doctor-add.component';
import { UserGetComponent } from './user/user-get/user-get.component';
import { DoctorUpdateComponent } from './doctor/doctor-update/doctor-update.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { MedGetComponent } from './user/med-get/med-get.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'doctors',
        component: DoctorGetComponent
    },
    {
        path: 'doctors/create',
        component: DoctorAddComponent
    },
    {
        path: 'doctors/update',
        component: DoctorUpdateComponent
    },
    {
        path: 'user',
        component: UserGetComponent
    },
    {
        path: 'medicine',
        component: MedGetComponent
    },
    {
        path: 'appointment/create',
        component: UserAddComponent
    },
  
    {
        path: 'appointment',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
