import { TestBed, inject } from '@angular/core/testing';

import { JournalsService } from './journals.service';

describe('JournalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JournalsService]
    });
  });

  it('should be created', inject([JournalsService], (service: JournalsService) => {
    expect(service).toBeTruthy();
  }));
});
