import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereePageComponent } from './referee-page.component';

describe('RefereePageComponent', () => {
  let component: RefereePageComponent;
  let fixture: ComponentFixture<RefereePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
