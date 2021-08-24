import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({providedIn: 'root'})
export class EmployeeService {
  private baseUrl = 'http://localhost:9090/eapi/employees';

  constructor(private http: HttpClient) { }

  // login(email : string , password: string){
  //   const headers= new HttpHeaders({
  //     Authorization: 'Basic' +btoa(email+":"+password)
  //   })
  //   return this.http.get("http:localhost:8080/",{headers,responseType:'text' as 'json'}
  //   )
  // }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getEmployeesList(): Observable<any> {
    // let email = "user";
    // let password = "adminLog";
    // const headers= new HttpHeaders({
    //   Authorization: 'Basic' +btoa(email+":"+password)
    // })
    return this.http.get(`${this.baseUrl}`);
  }
}
