import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsurancePlans } from 'src/app/Model/InsurancePlans';

@Injectable({
  providedIn: 'root'
})
export class InsurancePlansService {

  adminURL="http://localhost:8080/api/v1/admin/";
  constructor(private http:HttpClient) { }

  getAllInsurancePlans(): Observable<InsurancePlans[]>
  {
    return this.http.get<InsurancePlans[]>(this.adminURL+"getallinsuranceplans");
  }
}
