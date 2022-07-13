import { TestBed } from '@angular/core/testing';

import { StringMethodsService } from './string-methods.service';

describe('StringMethodsService', () => {
  let service: StringMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
