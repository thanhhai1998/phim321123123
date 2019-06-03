import { TestBed } from '@angular/core/testing';

import { DatveService } from './datve.service';

describe('DatveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatveService = TestBed.get(DatveService);
    expect(service).toBeTruthy();
  });
});
