import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardScoredetailComponent } from './scoreboard-scoredetail.component';

describe('ScoreboardScoredetailComponent', () => {
  let component: ScoreboardScoredetailComponent;
  let fixture: ComponentFixture<ScoreboardScoredetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreboardScoredetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardScoredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
