import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpecialiteComponent } from './admin-specialite.component';

describe('AdminSpecialiteComponent', () => {
  let component: AdminSpecialiteComponent;
  let fixture: ComponentFixture<AdminSpecialiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSpecialiteComponent]
    });
    fixture = TestBed.createComponent(AdminSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
