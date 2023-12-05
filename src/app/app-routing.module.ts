import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPatientsComponent } from './components/Patients/register-patients/register-patients.component';
import { UpdatePatientsComponent } from './components/Patients/update-patients/update-patients.component';
import { RegisterCompanyComponent } from './components/InsuranceCompany/register-company/register-company.component';
import { UpdateCompanyComponent } from './components/InsuranceCompany/update-company/update-company.component';
import { AddInsurancePlanComponent } from './components/InsurancePlans/add-insurance-plan/add-insurance-plan.component';
import { RegisterProviderComponent } from './components/HealthcareProvider/register-provider/register-provider.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GetAllPatientsComponent } from './components/Patients/get-all-patients/get-all-patients.component';
import { GetAllCompaniesComponent } from './components/InsuranceCompany/get-all-companies/get-all-companies.component';
import { GetAllInsurancePlansComponent } from './components/InsurancePlans/get-all-insurance-plans/get-all-insurance-plans.component';
import { GenerateInvoiceComponent } from './components/InvoiceDetails/generate-invoice/generate-invoice.component';
import { GetAllInvoicesComponent } from './components/InvoiceDetails/get-all-invoices/get-all-invoices.component';
import { UpdateProviderComponent } from './components/HealthcareProvider/update-provider/update-provider.component';
import { GetAllProvidersComponent } from './components/HealthcareProvider/get-all-providers/get-all-providers.component';
import { SubmitInsuranceClaimComponent } from './components/InsuranceClaims/submit-insurance-claim/submit-insurance-claim.component';
import { GetAllInsuranceClaimsComponent } from './components/InsuranceClaims/get-all-insurance-claims/get-all-insurance-claims.component';
import { UpdateInsuranceClaimComponent } from './components/InsuranceClaims/update-insurance-claim/update-insurance-claim.component';
import { ForgotPasswordComponent } from './components/Login/forgot-password/forgot-password.component';
import { AdmindashboardComponent } from './components/Admin/admindashboard.component';
import { LoginAdminComponent } from './components/Admin/login-admin/login-admin.component';

const routes: Routes = [
  // { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginAdminComponent },
  { path: 'registerpatient', component: RegisterPatientsComponent },
  { path: 'updatepatients/:id', component: UpdatePatientsComponent },
  { path: 'getallpatients', component: GetAllPatientsComponent },
  { path: 'registercompany', component: RegisterCompanyComponent },
  { path: 'companies/:id', component: UpdateCompanyComponent },
  { path: 'getallcompanies', component: GetAllCompaniesComponent },

  { path: 'addinsuranceplans', component: AddInsurancePlanComponent },
  { path: 'getallplans', component: GetAllInsurancePlansComponent },
  { path: 'generateinvoice', component: GenerateInvoiceComponent },
  { path: 'getallinvoices', component: GetAllInvoicesComponent },
  { path: 'registerprovider', component: RegisterProviderComponent },
  { path: 'addprovider', component: RegisterProviderComponent },
  { path: 'updateprovider', component: UpdateProviderComponent },
  { path: 'getallproviders', component: GetAllProvidersComponent },
  { path: 'addclaim', component: SubmitInsuranceClaimComponent },
  { path: 'getallclaims', component: GetAllInsuranceClaimsComponent },
  { path: 'updateclaim', component: UpdateInsuranceClaimComponent },
  { path: 'admin/dashboard', component: AdmindashboardComponent},
  {path:'forgetpassword',component:ForgotPasswordComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
