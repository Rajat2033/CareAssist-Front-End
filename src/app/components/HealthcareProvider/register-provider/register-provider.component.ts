import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HealthcareProvider } from 'src/app/model/HealthcareProvider';
import { HealthcareProviderService } from 'src/app/services/HealthcareProviderService/healthcare-provider.service';

@Component({
  selector: 'app-register-provider',
  templateUrl: './register-provider.component.html',
  styleUrls: ['./register-provider.component.css']
})
export class RegisterProviderComponent implements OnInit {

  registerProviderFormsGroup!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private providerService: HealthcareProviderService,private router:Router) { }
  ngOnInit(): void {
    this.registerProviderFormsGroup = this.formBuilder.group({
      providerName: ['', Validators.required],
      providerPassword: ['', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$")]],
      providerEmail: ['', [Validators.required, Validators.email]],
      providerGender: ['', Validators.required],
      providerSpeciality: ['', Validators.required],
      providerDesignation: ['', Validators.required],
      providerExperience: ['', Validators.required],
      providerQualification: ['', Validators.required]



    })
  }



  get f() {
    return this.registerProviderFormsGroup.controls;
  }

  submitform() {

    this.submitted = true;
    if (this.registerProviderFormsGroup.valid) {

      const formData = this.registerProviderFormsGroup.value;

      this.registerProvider(formData);
    }
  }
  registerProvider(formData: any) {

     formData = this.registerProviderFormsGroup.value;
    this.providerService.registerHealthcareProvider(formData).subscribe(
      (response) => {
        console.log('Provider registered successfully:');
        this.router.navigate(['/login/provider']);

      }
    );
  }
}

