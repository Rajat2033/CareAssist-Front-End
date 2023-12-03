import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  adminUrl:string = 'http://localhost:8080/api/v1/admin/';

  constructor(private http:HttpClient,private router:Router) { }

  getAdminGeneratedToken(requestBody:any)
  {
    return this.http.post(this.adminUrl+"authenticate",requestBody,{responseType: 'text' as 'json'});
  }
 
  adminAuthorizationTest(token:any){

    let tokenString = "Bearer "+token;

   const headers =  new HttpHeaders().set("Authorization",tokenString);


   console.log(headers);
    this.router.navigate(['/admin/dashboard']);
  // return this.http.get(this.adminUrl+"getallinsuranceplans",{headers,responseType:'text' as 'json'});
 

}
}
