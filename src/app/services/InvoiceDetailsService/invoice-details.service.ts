import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceDetails } from 'src/app/model/InvoiceDetails';
import { JwtAdminService } from '../AdminService/jwt-admin.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailsService {



  
  adminURL: string = 'http://localhost:8080/api/v1/invoicedetails';

  constructor(private http: HttpClient,private jwtAdmin:JwtAdminService) { }


  getAllInvoicesDetails(): Observable<InvoiceDetails[]> {
    const token = this.jwtAdmin.getToken();

    console.log(token);
    if (token) {
      const tokenString = 'Bearer ' + token;
      const headers = new HttpHeaders().set('Authorization', tokenString);

     
      console.log(headers);
      return this.http.get< InvoiceDetails[]>(this.adminURL + '/getallinvoices', { headers});
      }
      else{
        return new Observable<InvoiceDetails[]>;
      }
   
    

  }
}
