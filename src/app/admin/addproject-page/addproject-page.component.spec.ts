import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectPageComponent } from './addproject-page.component';

describe('AddprojectPageComponent', () => {
  let component: AddprojectPageComponent;
  let fixture: ComponentFixture<AddprojectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprojectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
