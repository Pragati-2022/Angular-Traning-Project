import { TestBed } from '@angular/core/testing';

import { MutiStepService } from './muti-step.service';

describe('MutiStepService', () => {
  let service: MutiStepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutiStepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
