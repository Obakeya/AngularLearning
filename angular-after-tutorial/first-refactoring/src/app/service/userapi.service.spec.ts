import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserApiService } from './userapi.service';

describe('UserApiService', () => {
  let service: UserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
