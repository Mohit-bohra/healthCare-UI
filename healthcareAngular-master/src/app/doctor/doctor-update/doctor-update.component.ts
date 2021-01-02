import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/doctor';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrls: ['./doctor-update.component.css']
})
export class DoctorUpdateComponent implements OnInit {
doctor:Doctor=new Doctor();
board:Object;
error:string;
  
  constructor(private service:UserService) { }

  ngOnInit() {
  }

  Update(available:Date){
    console.log("available");
    this.service.updateDoctor(this.doctor.docid,
      {available:available})
      .subscribe(
        data => {
          console.log(data);
          this.doctor = data as Doctor;
        },
        error => console.log(error));
  }
  
}
