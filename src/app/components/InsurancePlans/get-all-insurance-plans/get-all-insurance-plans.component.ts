import { Component } from '@angular/core';
import { InsurancePlans } from 'src/app/model/InsurancePlans';
import { InsurancePlansService } from 'src/app/services/InsurancePlansService/insurance-plans.service';

@Component({
  selector: 'app-get-all-insurance-plans',
  templateUrl: './get-all-insurance-plans.component.html',
  styleUrls: ['./get-all-insurance-plans.component.css']
})
export class GetAllInsurancePlansComponent {

  insurancePlansList:InsurancePlans[] = [];

  constructor(private plansService:InsurancePlansService){}

  getAllPlansDetails()
  {
    this.plansService.getAllInsurancePlans().subscribe(data=>{
      this.insurancePlansList = data;
      
    })
  }
}
