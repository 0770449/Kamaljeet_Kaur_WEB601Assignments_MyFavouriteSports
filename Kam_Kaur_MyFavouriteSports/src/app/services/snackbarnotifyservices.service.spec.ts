import { TestBed } from '@angular/core/testing';

import { SnackbarnotifyservicesService } from './snackbarnotifyservices.service';

describe('SnackbarnotifyservicesService', () => {
  let service: SnackbarnotifyservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackbarnotifyservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
