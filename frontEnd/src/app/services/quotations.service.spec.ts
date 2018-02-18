import { TestBed, inject } from '@angular/core/testing';

import { QuotationsService } from './quotations.service';

describe('QuotationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuotationsService]
    });
  });

  it('should be created', inject([QuotationsService], (service: QuotationsService) => {
    expect(service).toBeTruthy();
  }));
});
