import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsurancePlans } from 'src/app/Model/InsurancePlans';
import { JwtAdminService } from '../AdminService/jwt-admin.service';

@Injectable({
  providedIn: 'root'
})
export class InsurancePlansService {

  adminURL: string = 'http://localhost:8080/api/v1/admin';

  constructor(private http: HttpClient,private jwtAdmin:JwtAdminService) { }


  getAllInsurancePlans(): Observable<InsurancePlans[]> {
    const token = this.jwtAdmin.getToken();

    console.log(token);
    if (token) {
      const tokenString = 'Bearer ' + token;
      const headers = new HttpHeaders().set('Authorization', tokenString);

     
      console.log(headers);
      return this.http.get<InsurancePlans[]>(this.adminURL + '/getallinsuranceplans', { headers});
      }
      else{
        return new Observable<InsurancePlans[]>;
      }
    }
   
    
}
