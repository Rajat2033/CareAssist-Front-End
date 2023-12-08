import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinvoicebyPatientidComponent } from './getinvoiceby-patientid.component';

describe('GetinvoicebyPatientidComponent', () => {
  let component: GetinvoicebyPatientidComponent;
  let fixture: ComponentFixture<GetinvoicebyPatientidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetinvoicebyPatientidComponent]
    });
    fixture = TestBed.createComponent(GetinvoicebyPatientidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
