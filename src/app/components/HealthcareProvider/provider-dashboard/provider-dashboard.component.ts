import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtProviderService } from 'src/app/services/HealthcareProviderService/jwt-provider.service';


@Component({
  selector: 'app-provider-dashboard',
  templateUrl: './provider-dashboard.component.html',
  styleUrls: ['./provider-dashboard.component.css']
})
export class ProviderDashboardComponent {

  constructor(private jwtProviderService: JwtProviderService,private router:Router){}

  logout() {
    
    this.jwtProviderService.clearToken();
    this.router.navigate(['/login/provider']);
  }

}
