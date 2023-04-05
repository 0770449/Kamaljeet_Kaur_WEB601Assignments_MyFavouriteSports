import { TestBed } from '@angular/core/testing';

import { MyFavouriteSportsService } from './my-favourite-sports.service';

describe('MyFavouriteSportsService', () => {
  let service: MyFavouriteSportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFavouriteSportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
