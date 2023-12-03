import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-provider',
  templateUrl: './register-provider.component.html',
  styleUrls: ['./register-provider.component.css']
})
export class RegisterProviderComponent {

registerProviderFormsGroup!:FormGroup;
submitted=false;

constructor(private formBuilder:FormBuilder){}

get f()
{
  return this.registerProviderFormsGroup.controls;
}
  registerProvider()
  {
    
  }
}
