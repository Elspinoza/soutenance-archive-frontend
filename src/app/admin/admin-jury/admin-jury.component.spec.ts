import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJuryComponent } from './admin-jury.component';

describe('AdminJuryComponent', () => {
  let component: AdminJuryComponent;
  let fixture: ComponentFixture<AdminJuryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminJuryComponent]
    });
    fixture = TestBed.createComponent(AdminJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
