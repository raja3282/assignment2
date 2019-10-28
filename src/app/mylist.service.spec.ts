import { TestBed } from '@angular/core/testing';

import { MylistService } from './mylist.service';

describe('MylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MylistService = TestBed.get(MylistService);
    expect(service).toBeTruthy();
  });
});
