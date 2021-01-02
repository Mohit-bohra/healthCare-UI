import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/doctor';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctors:Doctor[];
  constructor(private service:UserService) { }

  ngOnInit() {
  }
//  deleteDoctor(doctor:Doctor): void {
//   this.service.deleteDoctor(docid)
//   .subscribe( data => {
//     this.doctors = this.doctors.filter(u => u !== doctor);
//  })
// };
}