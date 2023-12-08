import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceDetails } from 'src/app/model/InvoiceDetails';
import { Patients } from 'src/app/model/Patients';
import { InvoiceDetailsService } from 'src/app/services/InvoiceDetailsService/invoice-details.service';
import { PatientsService } from 'src/app/services/PatientsService/patients.service';

@Component({
  selector: 'app-getinvoiceby-patientid',
  templateUrl: './getinvoiceby-patientid.component.html',
  styleUrls: ['./getinvoiceby-patientid.component.css']
})
export class GetinvoicebyPatientidComponent implements OnInit {

  invoicesList: InvoiceDetails[] = [];
  patientId!: number;
  searchParameter!: string;
  status=false;
 

  constructor(private invoiceService: InvoiceDetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve patientId from route parameter
    this.route.params.subscribe((params) => {
      this.patientId = +params['patientId'];
      this.getInvoiceDetails();
    });
  }

  getInvoiceDetails() {
    this.invoiceService.getInvoicesByPatientId(this.patientId).subscribe(
      (data) => {
        this.invoicesList = data;
      },
      (error) => {
        console.error('Error fetching invoices:', error);
      }
    );
  }

  searchInvoices(searchParameter: string) {
    this.invoiceService.getInvoicesByPatientId(+searchParameter).subscribe(
      (data) => {
        this.invoicesList = data;
      },
      (error) => {
        console.error('Error searching invoices:', error);
      }
    );
  }
}
