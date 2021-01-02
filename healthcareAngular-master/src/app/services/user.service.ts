import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Doctor } from 'src/doctor';
import { Appointment } from 'src/Appointment';
import { Medicine } from '../user/Medicine';
import { users } from '../users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/test/user';
  private docUrl = 'http://localhost:8080/api/test/doctors';
  private appUrl = 'http://localhost:8080/api/test/appointment';
 
  items:Medicine[]=[];

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

   getAdminBoard(): Observable<string> {
    return this.http.get(this.appUrl, { responseType: 'text' });
  }
  //displaying doctor list for admin
  getDoctorBoard(): Observable<Object> {
    return this.http.get(this.docUrl, {responseType: 'json'});
  }
  //add doctor
  addDoctor(doctor: Object): Observable<Object> {
    return this.http.post(`${this.docUrl}` + `/create`, doctor);
  }
  //delete doctor
  deleteDoctor(docid: number): Observable<Doctor>{
    return this.http.delete<Doctor>(`${this.docUrl}/delete/${docid}`);
  }
  //update doctor
   updateDoctor(docid,value:any):any{
    return this.http.put(`${this.docUrl}/update/${docid}`,value);
  }
  //for admin appointment list
  getAppt():Observable<Object> {
    return this.http.get(this.appUrl, { responseType: 'json' });
  }
  //add Appointment by user
  addAppt(appt: Object): Observable<Object> {
   return this.http.post(`${this.appUrl}` + `/create`, appt);
  }
 //displaying doctor list for user
 getDoctors(): Observable<Object> {
  return this.http.get(this.userUrl, {responseType: 'json'});
}
//findbyID
getUserById(id:number):Observable<Object>{
  return this.http.get(this.userUrl, {responseType: 'json'});
}
//list for order user
 addToCart(medicine){
this.items.push(medicine);
}
deleteFromCart(medid){
    this.items.pop();
}

//array get
public getitems():Observable<Medicine[]>
{
    return of(this.items);
}


 //get from cart  
getOrder():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(`${this.userUrl}`+'/medicine/order');
}
//display the list
getProducts():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(`${this.userUrl}`+'/medicine');
}



  

}
