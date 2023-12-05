import { Component } from '@angular/core';
import { InsuranceClaims } from 'src/app/Model/InsuranceClaims';
import { InsuranceClaimsService } from 'src/app/services/InsuranceClaimsService/insurance-claims.service';

@Component({
  selector: 'app-get-all-insurance-claims',
  templateUrl: './get-all-insurance-claims.component.html',
  styleUrls: ['./get-all-insurance-claims.component.css']
})
export class GetAllInsuranceClaimsComponent {

  claimsList: InsuranceClaims[] = [];

  constructor(private claimService: InsuranceClaimsService) { }
  getAllClaims() {
    this.claimService.getAllInsuranceClaims().subscribe(data => {
      this.claimsList = data;
    }
    )
  }
}
