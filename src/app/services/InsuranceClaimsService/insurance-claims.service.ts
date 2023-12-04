import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsuranceClaims } from 'src/app/Model/InsuranceClaims';

@Injectable({
  providedIn: 'root'
})
export class InsuranceClaimsService {

  adminURL: string="http://localhost:8080/api/v1/admin/";
  constructor(private http:HttpClient) { }

  getAllInsuranceClaims(): Observable< InsuranceClaims[]>
  {
    return this.http.get<InsuranceClaims[]>(this.adminURL+"getallinsuranceclaims");
  }
}
