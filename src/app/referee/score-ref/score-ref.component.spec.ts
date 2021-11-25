import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreRefComponent } from './score-ref.component';

describe('ScoreRefComponent', () => {
  let component: ScoreRefComponent;
  let fixture: ComponentFixture<ScoreRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
