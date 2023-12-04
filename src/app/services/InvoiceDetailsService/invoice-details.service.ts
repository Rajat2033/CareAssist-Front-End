import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceDetails } from 'src/app/Model/InvoiceDetails';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailsService {

  constructor(private http:HttpClient) { }

  invoiceDetailsURL:string="http://localhost:8080/api/v1/invoicedetails/";

  getAllInvoiceDetails(): Observable<InvoiceDetails[]> {
    return this.http.get<InvoiceDetails[]>(this.invoiceDetailsURL + "getallinvoices");

  }
}
