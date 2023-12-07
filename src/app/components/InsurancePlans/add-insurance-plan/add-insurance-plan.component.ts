import { Component } from '@angular/core';
import { InsurancePlansService } from 'src/app/services/InsurancePlansService/insurance-plans.service';

@Component({
  selector: 'app-add-insurance-plan',
  templateUrl: './add-insurance-plan.component.html',
  styleUrls: ['./add-insurance-plan.component.css']
})
export class AddInsurancePlanComponent {

  constructor(private planService: InsurancePlansService) {

  }

  addPlan(formData:any) {
    this.planService.insertPlan(formData.form.value).subscribe(
      (response) => {
        alert('Claim Added successfully:');

      }
    );
  }
}


