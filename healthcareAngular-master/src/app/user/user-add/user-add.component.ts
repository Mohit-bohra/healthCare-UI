import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/Appointment';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  appt:Appointment=new Appointment();
  submitted = false;
  constructor(private service:UserService) { }

  ngOnInit() {
  }
  newApppointment():void{
    this.submitted = false;
    this.appt = new Appointment();
  } 

  save(){
    this.service.addAppt(this.appt)
    .subscribe(data => console.log(data), error => console.log(error));
    this.appt=new Appointment();
  }

  onSubmit(){
    this.submitted=true;
    this.save();  
  }

}
