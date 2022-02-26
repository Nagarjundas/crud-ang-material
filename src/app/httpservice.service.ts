import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  url ="http://localhost:3000/data"

  constructor(private http: HttpClient) { }

  getEmp(){
    return this.http.get(this.url)
  }
}
