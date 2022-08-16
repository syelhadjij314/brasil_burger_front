import { TestBed } from '@angular/core/testing';

import { Panier2Service } from './panier2.service';

describe('Panier2Service', () => {
  let service: Panier2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Panier2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
