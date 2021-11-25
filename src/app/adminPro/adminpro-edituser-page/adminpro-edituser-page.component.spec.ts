import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproEdituserPageComponent } from './adminpro-edituser-page.component';

describe('AdminproEdituserPageComponent', () => {
  let component: AdminproEdituserPageComponent;
  let fixture: ComponentFixture<AdminproEdituserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminproEdituserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminproEdituserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
