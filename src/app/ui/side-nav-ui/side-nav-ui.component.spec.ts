import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavUiComponent } from './side-nav-ui.component';

describe('SideNavUiComponent', () => {
  let component: SideNavUiComponent;
  let fixture: ComponentFixture<SideNavUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavUiComponent]
    });
    fixture = TestBed.createComponent(SideNavUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
