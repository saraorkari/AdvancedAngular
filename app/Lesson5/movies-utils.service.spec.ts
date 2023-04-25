import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MoviesUtilsService } from './movies-utils.service';

describe('MoviesUtilsService', () => {
  let service: MoviesUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(MoviesUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
