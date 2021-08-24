import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../../employee';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  employees!: Observable<Employee[]>;
  


  constructor(private employeeService: EmployeeService,private router: Router,private route: ActivatedRoute,private modalService: NgbModal) {}

  ngOnInit() {
    this.reloadData();
    
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  employeeDetails(id: number){
    this.router.navigate(['detail', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateEmployee(id: number){
    this.router.navigate(['update',id]);
  }


}
