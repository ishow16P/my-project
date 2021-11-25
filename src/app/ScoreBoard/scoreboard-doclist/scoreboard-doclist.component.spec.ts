import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardDoclistComponent } from './scoreboard-doclist.component';

describe('ScoreboardDoclistComponent', () => {
  let component: ScoreboardDoclistComponent;
  let fixture: ComponentFixture<ScoreboardDoclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreboardDoclistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardDoclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
