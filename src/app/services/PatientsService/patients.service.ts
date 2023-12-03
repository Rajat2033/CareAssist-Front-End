import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patients } from 'src/app/components/Model/Patients';
import { JwtClientService } from '../Jwt/jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  token:any;

  patientURL: string = 'http://localhost:8080/api/v1/admin/';

  constructor(private http: HttpClient,private jwtService:JwtClientService) { }


  getAllPatients(): Observable<Patients[]> {
    let tokenString = "Bearer "+this.token;

    const headers =  new HttpHeaders().set("Authorization",tokenString);

    console.log(headers);
    // Make the request with the headers
    return this.http.get<Patients[]>(this.patientURL + 'getall', { headers });
   

  }



}

