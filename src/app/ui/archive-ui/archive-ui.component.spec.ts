import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveUiComponent } from './archive-ui.component';

describe('ArchiveUiComponent', () => {
  let component: ArchiveUiComponent;
  let fixture: ComponentFixture<ArchiveUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveUiComponent]
    });
    fixture = TestBed.createComponent(ArchiveUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
