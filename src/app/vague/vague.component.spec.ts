import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagueComponent } from './vague.component';

describe('VagueComponent', () => {
  let component: VagueComponent;
  let fixture: ComponentFixture<VagueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VagueComponent]
    });
    fixture = TestBed.createComponent(VagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
