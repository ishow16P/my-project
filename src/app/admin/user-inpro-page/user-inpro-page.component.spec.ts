import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInproPageComponent } from './user-inpro-page.component';

describe('UserInproPageComponent', () => {
  let component: UserInproPageComponent;
  let fixture: ComponentFixture<UserInproPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInproPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInproPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
