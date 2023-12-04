import { Component } from '@angular/core';
import { AuthRequest } from '../../Model/AuhRequest';
import { JwtClientService } from '../../../services/Jwt/jwt-client.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  

  formResponse:any;
  token:any;

  // authRequest:AuthRequest=new AuthRequest();


  constructor(private jwtService:JwtClientService,private router:Router){}


  login(formData:any)
  {
   

      let username = formData.form.value.name;
      let password = formData.form.value.password;


      this.jwtService.login(username, password).subscribe(
        (token) => {
        
          console.log(token);
          this.jwtService.setToken(token);
          this.router.navigate(['/admin/dashboard'])
      
        }
      );
    
   
  }
  logout() {
    
    this.jwtService.clearToken();
    this.router.navigate(['/login']);
  }
}

  // public getAccessToken(authRequest:any){

  //   let response =  this.jwtService.getAdminGeneratedToken(authRequest);
 
  //      response.subscribe( (genToken)=> {  this.token = genToken ;console.log(genToken);  this.getAdmindash(this.token) });
 
       
 
  //  }
 
  //  public getAdmindash(token:any){
 
  //  let responseAdmin =    this.jwtService.adminAuthorizationTest(token);
 
  //       //  response.subscribe( responseData => {this.formResponse = responseData; console.log(responseData) });
 
  //  }
 
 


