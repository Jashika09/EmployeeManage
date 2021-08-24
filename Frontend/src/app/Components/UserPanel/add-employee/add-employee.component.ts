import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  uform!: FormGroup;
  employee: Employee = new Employee();
  submitted = false;

  constructor(private router: Router,private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.uform = new FormGroup({
      title: new FormControl(null,[Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null),
      gender: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      dob: new FormControl(null,[Validators.required]),
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
    console.log(this.uform);
    this.save();
    this.router.navigate(['/login']);    
  }

  gotoList() {
    this.router.navigate(['/login']);
  }

}