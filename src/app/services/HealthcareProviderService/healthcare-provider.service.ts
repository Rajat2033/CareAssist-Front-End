import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthcareProvider } from 'src/app/Model/HealthcareProvider';
import { JwtProviderService } from './jwt-provider.service';

@Injectable({
  providedIn: 'root'
})
export class HealthcareProviderService {

  providerURL: string = 'http://localhost:8080/api/v1/provider';

  constructor(private http: HttpClient,private jwtProvider:JwtProviderService) { }


  registerHealthcareProvider(provider:HealthcareProvider)
  {
    return this.http.post(this.providerURL+"/add/provider",provider);
  }

  getAllProviders(): Observable<HealthcareProvider[]> {
    const token = this.jwtProvider.getToken();

    console.log(token);
    if (token) {
      const tokenString = 'Bearer ' + token;
      const headers = new HttpHeaders().set('Authorization', tokenString);

     
      console.log(headers);
      return this.http.get<HealthcareProvider[]>(this.providerURL + '/getall/provider', { headers});
      }
      else{
        return new Observable<HealthcareProvider[]>;
      }
   
    

  }
}
