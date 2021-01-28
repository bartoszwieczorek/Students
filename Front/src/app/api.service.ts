import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any>{
    return this.http.get(this.baseurl + '/students/', {headers: this.httpHeaders});
  }

  getOneStudent(id: any): Observable<any>{
    return this.http.get(this.baseurl + '/students/' + id + '/', {headers: this.httpHeaders});
  }

  updateStudent(student:any): Observable<any>{
    const body = {id: student.id, name: student.name, age: student.age, roll_number: student.roll_number };
    // prompt('Success');
    // alert('Success');
    return this.http.put(this.baseurl + '/students/' + student.id + '/', body, {headers: this.httpHeaders, observe: 'response'});
  }
  createStudent(student:any): Observable<any> {
    const body = {id: student.id, name: student.name, age: student.age, roll_number: student.roll_number };
    // console.log(this.http.post(this.baseurl + '/students/', body, {headers: this.httpHeaders}));
    // this.http.post(this.baseurl + '/students/', body, {headers: this.httpHeaders, observe: 'response'}).subscribe(response => {
    //   console.log(response.status); // 200
    //   const body = response.body;    
    // });
    return this.http.post(this.baseurl + '/students/', body, {headers: this.httpHeaders, observe: 'response'});
    
  }
  deleteStudent(id: any): Observable<any> {
    return this.http.delete(this.baseurl + '/students/' + id + '/',{headers: this.httpHeaders, observe: 'response'});
  }
}
