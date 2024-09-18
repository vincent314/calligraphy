import { TestBed } from '@angular/core/testing';

import { JsonDataClient } from './json-data.client';

describe('CalligraphyDataClientService', () => {
  let service: JsonDataClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonDataClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
