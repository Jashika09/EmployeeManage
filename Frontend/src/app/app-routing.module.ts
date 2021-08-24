import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Components/AdminPanel/admin/admin.component';
import { EmployeeDetailsComponent } from './Components/AdminPanel/employee-details/employee-details.component';
import { RecordsComponent } from './Components/AdminPanel/records/records.component';
import { UpdateComponent } from './Components/AdminPanel/update/update.component';
import { LoginComponent } from './Components/login/login.component';
import { AddEmployeeComponent } from './Components/UserPanel/add-employee/add-employee.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'admin',
    component: AdminComponent
  },
 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'records',
    component: RecordsComponent
  },
  {
    path: 'home',
    component: AddEmployeeComponent
  },
  {
    path:'detail',
    component:EmployeeDetailsComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  },
  {
    path: '**',
    redirectTo: '/login'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
