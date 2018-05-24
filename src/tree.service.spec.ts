import { TestBed, inject } from '@angular/core/testing';

import { Ng2TreeService } from './tree.service';

describe('Ng2TreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng2TreeService]
    });
  });

  it('should be created', inject([Ng2TreeService], (service: Ng2TreeService) => {
    expect(service).toBeTruthy();
  }));
});
