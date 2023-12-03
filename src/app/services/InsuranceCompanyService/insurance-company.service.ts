import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsuranceCompany } from 'src/app/components/Model/InsuranceCompany';

@Injectable({
  providedIn: 'root'
})
export class InsuranceCompanyService {
  companyURL="http://localhost:8080/api/v1/companies/";
  constructor(private http:HttpClient) { }

  getAllInsuranceCompanies(): Observable<InsuranceCompany[]>
  {
    return this.http.get<InsuranceCompany[]>(this.companyURL+"getallcompaniesdata");
  }
}
