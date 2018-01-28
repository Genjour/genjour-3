import { TestBed, inject } from '@angular/core/testing';

import { GenjouristService } from './genjourist.service';

describe('GenjouristService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenjouristService]
    });
  });

  it('should be created', inject([GenjouristService], (service: GenjouristService) => {
    expect(service).toBeTruthy();
  }));
});
