import { TestBed } from '@angular/core/testing';

import { ProjectService } from './projectservice.service';

describe('ProjectserviceService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
