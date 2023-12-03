import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPatientsComponent } from './components/Patients/register-patients/register-patients.component';
import { UpdatePatientsComponent } from './components/Patients/update-patients/update-patients.component';
import { GetAllPatientsComponent } from './components/Patients/get-all-patients/get-all-patients.component';
import { RegisterCompanyComponent } from './components/InsuranceCompany/register-company/register-company.component';
import { UpdateCompanyComponent } from './components/InsuranceCompany/update-company/update-company.component';
import { GetAllCompaniesComponent } from './components/InsuranceCompany/get-all-companies/get-all-companies.component';
import { AddInsurancePlanComponent } from './components/InsurancePlans/add-insurance-plan/add-insurance-plan.component';
import { GetAllInsurancePlansComponent } from './components/InsurancePlans/get-all-insurance-plans/get-all-insurance-plans.component';
import { RegisterProviderComponent } from './components/HealthcareProvider/register-provider/register-provider.component';
import { UpdateProviderComponent } from './components/HealthcareProvider/update-provider/update-provider.component';
import { GetAllProvidersComponent } from './components/HealthcareProvider/get-all-providers/get-all-providers.component';
import { SubmitInsuranceClaimComponent } from './components/InsuranceClaims/submit-insurance-claim/submit-insurance-claim.component';
import { UpdateInsuranceClaimComponent } from './components/InsuranceClaims/update-insurance-claim/update-insurance-claim.component';
import { GetAllInsuranceClaimsComponent } from './components/InsuranceClaims/get-all-insurance-claims/get-all-insurance-claims.component';
import { GenerateInvoiceComponent } from './components/InvoiceDetails/generate-invoice/generate-invoice.component';
import { GetAllInvoicesComponent } from './components/InvoiceDetails/get-all-invoices/get-all-invoices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { LoginComponent } from './components/Login/login/login.component';
import { ForgotPasswordComponent } from './components/Login/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPatientsComponent,
    UpdatePatientsComponent,
    GetAllPatientsComponent,
    RegisterCompanyComponent,
    UpdateCompanyComponent,
    GetAllCompaniesComponent,
    AddInsurancePlanComponent,
    GetAllInsurancePlansComponent,
    RegisterProviderComponent,
    UpdateProviderComponent,
    GetAllProvidersComponent,
    SubmitInsuranceClaimComponent,
    UpdateInsuranceClaimComponent,
    GetAllInsuranceClaimsComponent,
    GenerateInvoiceComponent,
    GetAllInvoicesComponent,
    HomepageComponent,
    AdmindashboardComponent,
    LoginComponent,

    ForgotPasswordComponent

  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
