import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { InsurancePlans } from 'src/app/model/InsurancePlans';
import { InsurancePlansService } from 'src/app/services/InsurancePlansService/insurance-plans.service';

@Component({
  selector: 'app-getplans-bytype',
  templateUrl: './getplans-bytype.component.html',
  styleUrls: ['./getplans-bytype.component.css']
})
export class GetplansBytypeComponent {

  insurancePlanList!:InsurancePlans[];
  

  constructor(private planService:InsurancePlansService,private route:ActivatedRoute){}
  
 
  searchInput:string = '';



  onSearch() {
    if (this.searchInput.trim() !== '') {
      this.planService.searchPlans(this.searchInput).subscribe(list => {
        this.insurancePlanList = list ;
        console.log(this.insurancePlanList)
      });
    }
  }
}

5