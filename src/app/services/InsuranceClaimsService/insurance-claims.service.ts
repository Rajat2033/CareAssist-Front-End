import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsuranceClaims } from 'src/app/Model/InsuranceClaims';
import { JwtAdminService } from '../AdminService/jwt-admin.service';

@Injectable({
  providedIn: 'root'
})
export class InsuranceClaimsService {

  adminURL: string="http://localhost:8080/api/v1/admin";
  constructor(private http:HttpClient,private jwtAdmin:JwtAdminService) { }

  getAllInsuranceClaims(): Observable<InsuranceClaims[]> {
    const token = this.jwtAdmin.getToken();

    console.log(token);
    if (token) {
      const tokenString = 'Bearer ' + token;
      const headers = new HttpHeaders().set('Authorization', tokenString);

     
      console.log(headers);
      return this.http.get<InsuranceClaims[]>(this.adminURL + '/getallinsuranceclaims', { headers});
      }
      else{
        return new Observable<InsuranceClaims[]>;
      }
    }
   
    
}
