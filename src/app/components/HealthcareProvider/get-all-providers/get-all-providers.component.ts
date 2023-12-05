import { Component } from '@angular/core';
import { HealthcareProvider } from 'src/app/Model/HealthcareProvider';
import { HealthcareProviderService } from 'src/app/services/HealthcareProviderService/healthcare-provider.service';

@Component({
  selector: 'app-get-all-providers',
  templateUrl: './get-all-providers.component.html',
  styleUrls: ['./get-all-providers.component.css']
})
export class GetAllProvidersComponent {

  healthcareProvidersList:HealthcareProvider[] = [];
  constructor(private providerService: HealthcareProviderService){}
  getAllProvidersData()
  {
this.providerService.getAllProviders().subscribe(data=>{this.healthcareProvidersList=data;})
  }
  
  

}
