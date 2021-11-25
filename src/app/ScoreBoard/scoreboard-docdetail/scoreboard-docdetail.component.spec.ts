import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardDocdetailComponent } from './scoreboard-docdetail.component';

describe('ScoreboardDocdetailComponent', () => {
  let component: ScoreboardDocdetailComponent;
  let fixture: ComponentFixture<ScoreboardDocdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreboardDocdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardDocdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
