import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtPatientService } from 'src/app/services/PatientsService/jwt-patient.service';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent {

  constructor(private jwtPatientService:JwtPatientService,private router:Router){}


  loginPatients(formData:any)
  {
   

      let username = formData.form.value.name;
      let password = formData.form.value.password;


      this.jwtPatientService.login(username, password).subscribe(
        (token) => {
        
          console.log(token);
          this.jwtPatientService.setToken(token);
          this.router.navigate(['/patient/dashboard'])
      
        }
      );
    
   
  }
 
}
