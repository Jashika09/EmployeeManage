import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,private employeeService: EmployeeService,private FormModule : FormsModule) { }

  aform!: FormGroup;
  employee: Employee = new Employee();
  submitted = false;

  ngOnInit(): void {

    this.submitted=false;  
    this.aform = new FormGroup({
      title: new FormControl(null),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null),
      gender: new FormControl(null),
      email: new FormControl(null,[Validators.required,Validators.email]),
      dob: new FormControl(null),
      code: new FormControl(null,[Validators.required]),
      phoneNo: new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      previousEmployee: new FormControl(null),
      experience: new FormControl(null),
      position: new FormControl(null),
      education: new FormControl(null),
      address: new FormControl(null,[Validators.required]),
      city: new FormControl(null,[Validators.required]),
      state: new FormControl(null,[Validators.required]),
      country: new FormControl(null,[Validators.required]),
      pinCode:new FormControl(null,[Validators.required])
     
      
    });
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService
    .createEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.aform);
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/records']);
  }

}
