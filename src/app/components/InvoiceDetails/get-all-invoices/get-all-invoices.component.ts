import { Component } from '@angular/core';
import { InvoiceDetails } from 'src/app/Model/InvoiceDetails';
import { InvoiceDetailsService } from 'src/app/services/InvoiceDetailsService/invoice-details.service';

@Component({
  selector: 'app-get-all-invoices',
  templateUrl: './get-all-invoices.component.html',
  styleUrls: ['./get-all-invoices.component.css']
})
export class GetAllInvoicesComponent {

  invoiceList:InvoiceDetails[] =[];


  constructor(private invoiceService:InvoiceDetailsService){}

  getAllInvoicesDetails()
  {
    this.invoiceService.getAllInvoicesDetails().subscribe(data=>{
      this.invoiceList = data;
     
  }
    );

  }
}
