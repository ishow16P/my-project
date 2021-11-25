import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDetailPageComponent } from './pro-detail-page.component';

describe('ProDetailPageComponent', () => {
  let component: ProDetailPageComponent;
  let fixture: ComponentFixture<ProDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
