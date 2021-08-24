import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './Components/AdminPanel/admin/admin.component';
import { HeaderComponent } from './Components/UserPanel/header/header.component';
import { AdminHeaderComponent } from './Components/AdminPanel/admin-header/admin-header.component';
import { RecordsComponent } from './Components/AdminPanel/records/records.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './Components/UserPanel/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './Components/AdminPanel/update/update.component';
import { EmployeeDetailsComponent } from './Components/AdminPanel/employee-details/employee-details.component';
import { AddEmployeeComponent } from './Components/UserPanel/add-employee/add-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,  
    HeaderComponent,
    
    AdminComponent,
    AdminHeaderComponent,
    RecordsComponent,
    FooterComponent,
    UpdateComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbModalModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
