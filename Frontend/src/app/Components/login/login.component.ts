import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lform!: FormGroup;
  
  constructor(private router: Router,private loginService: LoginService) { }

  ngOnInit(): void {
    this.lform = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onLogin() {
    const email = this.lform.value.email;
    const password = this.lform.value.password;

    if(email == "jashika134@gmail.com" && password == "admin12")
    {
      alert("Welcome Admin")
      this.router.navigate(['/admin'])
     
    }
    else if(email == "user@gmail.com" && password =="user12"){
      alert("Welcome User")
      this.router.navigate(['/home'])
    }
    else{
      alert("Please Check Credentials")
    }
  }
}