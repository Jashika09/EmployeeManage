import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn = new BehaviorSubject<boolean>(false);
  email: string = "jashika134@gmail.com";
  passwprd: string = "Jarry55@";

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api';
 

  constructor(private http: HttpClient,private router : Router) {}

  login(user: { email: String, password: String }): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, user);
  }

  logout(): void {
    this.loggedIn.next(false);
    console.log(localStorage.getItem('form_loggedin'))
    localStorage.clear();
    console.log(localStorage.getItem('form_loggedin'))
    this.router.navigate(['/login']);
  }
}
