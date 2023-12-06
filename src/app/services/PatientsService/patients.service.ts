import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Patients } from 'src/app/model/Patients';
import { JwtPatientService } from './jwt-patient.service';
import { JwtAdminService } from '../AdminService/jwt-admin.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {



  patientURL: string = 'http://localhost:8080/api/v1/patients';

  constructor(private http: HttpClient, private jwtPatient: JwtPatientService, private jwtAdmin: JwtAdminService) { }


  registerPatients(patients: Patients): Observable<Patients> {
    return this.http.post<Patients>(this.patientURL + "/add/new", patients);
  }

  
  getAllPatients(): Observable<Patients[]> {
    const token = this.jwtAdmin.getToken();

    console.log(token);
    if (token) {
      const tokenString = 'Bearer ' + token;
      const headers = new HttpHeaders().set('Authorization', tokenString);


      console.log(headers);
      return this.http.get<Patients[]>(this.patientURL + '/get/allPatients', { headers });
    }
    else {
      return new Observable<Patients[]>;
    }



  }


  deletePatientById(patientId: number): Observable<string> {
    const token = this.jwtAdmin.getToken();

    console.log(token);
    if (token) {
      const tokenString = 'Bearer ' + token;
      const headers = new HttpHeaders().set('Authorization', tokenString);
      return this.http.delete<string>(this.patientURL + `/delete/patient/${patientId}`, { headers })
    }
    else {
      return new Observable<string>();
    }
  }
}





