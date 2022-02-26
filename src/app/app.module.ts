import { HttpserviceService } from './httpservice.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeSignupComponent } from './employee-signup/employee-signup.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,

    AddEmployeeComponent,
    EmployeeSignupComponent,
    EmployeeLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,MatCardModule
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
