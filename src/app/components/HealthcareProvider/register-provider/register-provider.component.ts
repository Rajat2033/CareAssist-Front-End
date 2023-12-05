import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HealthcareProvider } from 'src/app/Model/HealthcareProvider';
import { HealthcareProviderService } from 'src/app/services/HealthcareProviderService/healthcare-provider.service';

@Component({
  selector: 'app-register-provider',
  templateUrl: './register-provider.component.html',
  styleUrls: ['./register-provider.component.css']
})
export class RegisterProviderComponent implements OnInit {

  registerProviderFormsGroup!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private providerService:HealthcareProviderService) { }
  ngOnInit(): void {
    this.registerProviderFormsGroup=this.formBuilder.group({
      providerName:['', Validators.required],
      providerPassword:['', [Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$")]],
      providerEmail:['', [Validators.required,Validators.email]],
      providerGender:['', Validators.required],
      providerSpeciality:['', Validators.required],
      providerDesignation:['',Validators.required],
      providerExperience:['', Validators.required],
      providerQualification:['', Validators.required]

    

    })
  }



  get f() {
    return this.registerProviderFormsGroup.controls;
  }

  submitform()
  {
   
      this.submitted=true;
      if(this.registerProviderFormsGroup.invalid)
      {
        return;
      }
      else
      {
       this.registerProvider();
      }
  }
  registerProvider() {
    if (this.registerProviderFormsGroup.valid) {
      const providerData = this.registerProviderFormsGroup.value;
      this.providerService.registerHealthcareProvider(providerData).subscribe(
        (response) => {
          alert('Provider registered successfully:');
         
        },
        (error) => {
          console.error('Error registering provider:', error);
        }
      );
    }
  }
}
