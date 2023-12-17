import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVagueComponent } from './admin-vague.component';

describe('AdminVagueComponent', () => {
  let component: AdminVagueComponent;
  let fixture: ComponentFixture<AdminVagueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVagueComponent]
    });
    fixture = TestBed.createComponent(AdminVagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
