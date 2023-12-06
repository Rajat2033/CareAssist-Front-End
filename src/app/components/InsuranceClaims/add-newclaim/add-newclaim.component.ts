import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsuranceClaimsService } from 'src/app/services/InsuranceClaimsService/insurance-claims.service';

@Component({
  selector: 'app-add-newclaim',
  templateUrl: './add-newclaim.component.html',
  styleUrls: ['./add-newclaim.component.css']
})
export class AddNewclaimComponent  {

  constructor(private claimService: InsuranceClaimsService){}
 
  addInsuranceClaim(formData: any) {


    this.claimService.addClaim(formData.form.value).subscribe(
      (response) => {
       alert('Claim Added successfully:');
       

      }
    );
  }



}


