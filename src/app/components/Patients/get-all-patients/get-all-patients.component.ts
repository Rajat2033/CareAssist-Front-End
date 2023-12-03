import { Component } from '@angular/core';
import { Patients } from '../../Model/Patients';
import { PatientsService } from 'src/app/services/PatientsService/patients.service';

@Component({
  selector: 'app-get-all-patients',
  templateUrl: './get-all-patients.component.html',
  styleUrls: ['./get-all-patients.component.css']
})
export class GetAllPatientsComponent {

  patientList: Patients[] = [];

  constructor(private patientService:PatientsService){}

  getAllPatientsData(){
    this.patientService.getAllPatients().subscribe(data=>{
      this.patientList = data;
    })
  }

}
