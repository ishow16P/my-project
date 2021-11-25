import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproPageComponent } from './editpro-page.component';

describe('EditproPageComponent', () => {
  let component: EditproPageComponent;
  let fixture: ComponentFixture<EditproPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
