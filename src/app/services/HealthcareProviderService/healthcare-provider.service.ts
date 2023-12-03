import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthcareProvider } from 'src/app/components/Model/HealthcareProvider';

@Injectable({
  providedIn: 'root'
})
export class HealthcareProviderService {

  adminURL: string = "http://localhost:8080/api/v1/admin/";
  constructor(private http: HttpClient) { }
  getAllProviders(): Observable<HealthcareProvider[]> {
    return this.http.get<HealthcareProvider[]>(this.adminURL + "getallproviders");
  }
}
