import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArchiveComponent } from './admin-archive.component';

describe('AdminArchiveComponent', () => {
  let component: AdminArchiveComponent;
  let fixture: ComponentFixture<AdminArchiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminArchiveComponent]
    });
    fixture = TestBed.createComponent(AdminArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
