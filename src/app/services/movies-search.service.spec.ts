import { TestBed } from '@angular/core/testing';

import { MoviesSearchService } from './movies-search.service';

describe('MoviesSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesSearchService = TestBed.get(MoviesSearchService);
    expect(service).toBeTruthy();
  });
});
