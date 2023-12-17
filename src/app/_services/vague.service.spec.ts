import { TestBed } from '@angular/core/testing';

import { VagueService } from './vague.service';

describe('VagueService', () => {
  let service: VagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
