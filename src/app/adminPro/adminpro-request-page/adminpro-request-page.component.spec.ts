import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproRequestPageComponent } from './adminpro-request-page.component';

describe('AdminproRequestPageComponent', () => {
  let component: AdminproRequestPageComponent;
  let fixture: ComponentFixture<AdminproRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminproRequestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminproRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
