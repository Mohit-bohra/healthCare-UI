import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/Appointment';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {
  doctor:Object;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getDoctors().subscribe(
      data => {
        this.doctor = data;
      },
     );
  }
 
}
