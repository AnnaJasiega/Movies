import { TestBed } from '@angular/core/testing';

import { FavouriteListService } from './favouriteList.service';

describe('FavouriteService', () => {
  let service: FavouriteListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
