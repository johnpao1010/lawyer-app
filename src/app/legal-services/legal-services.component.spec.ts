import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalServicesComponent } from './legal-services.component';

describe('LegalServicesComponent', () => {
  let component: LegalServicesComponent;
  let fixture: ComponentFixture<LegalServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalServicesComponent]
    });
    fixture = TestBed.createComponent(LegalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
