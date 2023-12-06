import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAdminService } from 'src/app/services/AdminService/jwt-admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  constructor(private jwtAdminService:JwtAdminService,private router:Router){}


  login(formData:any)
  {
   

      let username = formData.form.value.name;
      let password = formData.form.value.password;


      this.jwtAdminService.login(username, password).subscribe(
        (token) => {
        
          console.log(token);
          this.jwtAdminService.setToken(token);
          this.router.navigate(['/admin/dashboard'])
      
        }
      );
    
   
  }
  logout() {
    
    this.jwtAdminService.clearToken();
    this.router.navigate(['/login/admin']);
  }
}

