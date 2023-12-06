import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsurancePlans } from 'src/app/model/InsurancePlans';
import { JwtAdminService } from '../AdminService/jwt-admin.service';
import { JwtPatientService } from '../PatientsService/jwt-patient.service';

@Injectable({
  providedIn: 'root'
})
export class InsurancePlansService {
  searchPlansByType(searchTerm: any) {
    throw new Error('Method not implemented.');
  }

  adminURL: string = 'http://localhost:8080/api/v1/admin';

  plansURL: string = 'http://localhost:8080/api/v1/insuranceplans';
  constructor(private http: HttpClient,private jwtAdmin:JwtAdminService,private jwtPatient:JwtPatientService) { }


  getAllInsurancePlans(): Observable<InsurancePlans[]> {
    const token = this.jwtAdmin.getToken();

    console.log(token);
    if (token) {
      const tokenString = 'Bearer ' + token;
      const headers = new HttpHeaders().set('Authorization', tokenString);

   
      return this.http.get<InsurancePlans[]>(this.adminURL + '/getallinsuranceplans', { headers});
      }
      else{
        return new Observable<InsurancePlans[]>;
      }
    }
    

    searchPlans(planType:string): Observable<InsurancePlans[]> {
      const token = this.jwtPatient.getToken();
  
      console.log(token);
      if (token) {
        const tokenString = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenString);
  
     
        return this.http.get<InsurancePlans[]>(this.plansURL + `/getplanbytype/${planType}`,{ headers});
        }
        else{
          return new Observable<InsurancePlans[]>;
        }
      }

      
   
    
}
