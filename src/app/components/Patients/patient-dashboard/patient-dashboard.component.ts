import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtPatientService } from 'src/app/services/PatientsService/jwt-patient.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {
  constructor(private router: Router,private jwtPatientService:JwtPatientService){}

  logout() {
    
    this.jwtPatientService.clearToken();

    this.router.navigate(['/login/patient']);
  }

}
