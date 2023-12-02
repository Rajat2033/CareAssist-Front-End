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

const routes: Routes = [
  // { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'registerpatients', component: RegisterPatientsComponent },
  { path: 'updatepatients/:id', component: UpdatePatientsComponent },
  { path: 'getallpatients', component: GetAllPatientsComponent },
  { path: 'registercompanies', component: RegisterCompanyComponent },
  { path: 'companies/:id', component: UpdateCompanyComponent },
  { path: 'addplans', component: AddInsurancePlanComponent },
  { path: 'registerproviders', component: RegisterProviderComponent },
  { path: '', component: HomepageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
