import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsuranceCompany } from 'src/app/model/InsuranceCompany';
import { JwtCompanyService } from './jwt-company.service';
import { JwtAdminService } from '../AdminService/jwt-admin.service';

@Injectable({
  providedIn: 'root'
})
export class InsuranceCompanyService {
  companyURL: string = 'http://localhost:8080/api/v1/companies';

  constructor(private http: HttpClient, private jwtCompany: JwtCompanyService, private jwtAdmin: JwtAdminService) { }


  registerCompany(company: InsuranceCompany): Observable<InsuranceCompany> {
    return this.http.post<InsuranceCompany>(this.companyURL + '/add/company', company);
  }
  getAllCompanyData(): Observable<InsuranceCompany[]> {
    const token = this.jwtAdmin.getToken();

    console.log(token);
    if (token) {
      const tokenString = 'Bearer ' + token;
      const headers = new HttpHeaders().set('Authorization', tokenString);


      console.log(headers);
      return this.http.get<InsuranceCompany[]>(this.companyURL + '/getallcompaniesdata', { headers });
    }
    else {
      return new Observable<InsuranceCompany[]>;
    }

  }

  deleteCompanyById(companyId: number): Observable<string> {
    const token = this.jwtAdmin.getToken();

    console.log(token);
    if (token) {
      const tokenString = 'Bearer ' + token;
      const headers = new HttpHeaders().set('Authorization', tokenString);
      return this.http.delete<string>(this.companyURL + `/delete/companyById/${companyId}`, { headers })
    }
    else {
      return new Observable<string>();
    }
  }
}
