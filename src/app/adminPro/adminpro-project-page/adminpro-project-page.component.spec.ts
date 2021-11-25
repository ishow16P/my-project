import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproProjectPageComponent } from './adminpro-project-page.component';

describe('AdminproProjectPageComponent', () => {
  let component: AdminproProjectPageComponent;
  let fixture: ComponentFixture<AdminproProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminproProjectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminproProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
