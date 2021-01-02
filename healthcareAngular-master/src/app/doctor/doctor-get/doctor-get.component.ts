import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Doctor } from 'src/doctor';
import { AdminComponent } from 'src/app/admin/admin.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctor-get',
  templateUrl: './doctor-get.component.html',
  styleUrls: ['./doctor-get.component.css']
})
export class DoctorGetComponent implements OnInit {
  board: Object;
  appt: Object;
  errorMessage: string;
  selecteddoc:Doctor;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getDoctorBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );   
  
  }

  deleteDoctor(docid: any) {
    this.userService.deleteDoctor(docid)
      .subscribe(
        data => {
          console.log(data);
         
        },
        error => console.log(error));
     window.alert("Deleted");
      }
      
     
  onSelection(doc:Doctor){
    this.selecteddoc=doc;
  }
}
