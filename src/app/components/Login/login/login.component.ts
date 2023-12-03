import { Component } from '@angular/core';
import { AuthRequest } from '../../Model/AuhRequest';
import { JwtClientService } from '../../../services/Jwt/jwt-client.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  

  formResponse:any;
  token:any;

  authRequest:AuthRequest=new AuthRequest();


  constructor(private jwtService:JwtClientService){}


  readFormData(formData:any)
  {
   

      this.authRequest.username = formData.form.value.username;
      this.authRequest.password = formData.form.value.password;

      this.getAccessToken(this.authRequest);

   
  }

  public getAccessToken(authRequest:any){

    let response =  this.jwtService.getAdminGeneratedToken(authRequest);
 
       response.subscribe( (genToken)=> {  this.token = genToken ;console.log(genToken);  this.accessApi(this.token) });
 
       
 
   }
 
   public accessApi(token:any){
 
   let response =    this.jwtService.adminAuthorizationTest(token);
 
         response.subscribe( responseData => {this.formResponse = responseData; console.log(responseData) });
 
   }
 
 

}
