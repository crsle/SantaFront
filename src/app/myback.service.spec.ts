import { TestBed } from '@angular/core/testing';

import { MybackService } from './myback.service';

describe('MybackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MybackService = TestBed.get(MybackService);
    expect(service).toBeTruthy();
  });
});
