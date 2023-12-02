import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitInsuranceClaimComponent } from './submit-insurance-claim.component';

describe('SubmitInsuranceClaimComponent', () => {
  let component: SubmitInsuranceClaimComponent;
  let fixture: ComponentFixture<SubmitInsuranceClaimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitInsuranceClaimComponent]
    });
    fixture = TestBed.createComponent(SubmitInsuranceClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
