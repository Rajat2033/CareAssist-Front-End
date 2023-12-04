import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
//   adminUrl:string = 'http://localhost:8080/api/v1/admin/';

//   constructor(private http:HttpClient,private router:Router) { }

//   getAdminGeneratedToken(requestBody:any)
//   {
//     return this.http.post(this.adminUrl+"authenticate",requestBody,{responseType: 'text' as 'json'});
//   }
 
//   adminAuthorizationTest(token:any){

//     let tokenString = "Bearer "+token;

//    const headers =  new HttpHeaders().set("Authorization",tokenString);


//    console.log(headers);
//     this.router.navigate(['/admin/dashboard']);
//   // return this.http.get(this.adminUrl+"getallinsuranceplans",{headers,responseType:'text' as 'json'});

// }
private adminUrl: string = 'http://localhost:8080/api/v1/patients/';
  private tokenKey: string = 'jwtToken';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    const requestBody = { username, password };
    return this.http.post<string>(this.adminUrl + 'authenticate', requestBody,{responseType: 'text' as 'json'});
  }
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
