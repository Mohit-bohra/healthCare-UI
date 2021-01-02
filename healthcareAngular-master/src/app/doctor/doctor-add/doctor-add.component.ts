import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Doctor } from 'src/doctor';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent implements OnInit {
  
  // @Input()
  doctor:Doctor=new Doctor();
  submitted = false;
  angForm:FormGroup;
  constructor(private fb:FormBuilder,private service:UserService) { }

  ngOnInit() {
  }
  newDoctor():void{
    this.submitted = false;
    this.doctor = new Doctor();
  } 

  save(){
    this.service.addDoctor(this.doctor)
    .subscribe(data => console.log(data), error => console.log(error));
    this.doctor=new Doctor();
  }

  onSubmit(){
    this.submitted=true;
    this.save();  
  }

}
