import { TestBed } from '@angular/core/testing';

import { CountSeviceService } from './count.service';

describe('CountSeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountSeviceService = TestBed.get(CountSeviceService);
    expect(service).toBeTruthy();
  });
});
