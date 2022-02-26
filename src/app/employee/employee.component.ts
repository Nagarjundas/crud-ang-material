import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

 employees : any = [];

  constructor(private httpservice: HttpserviceService) { }

  ngOnInit(): void {

    this.httpservice.getEmp().subscribe((data)=>{
      this.employees = data;
      console.log(data)
    });

  }

}
