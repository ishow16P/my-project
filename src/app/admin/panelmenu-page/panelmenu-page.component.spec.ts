import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelmenuPageComponent } from './panelmenu-page.component';

describe('PanelmenuPageComponent', () => {
  let component: PanelmenuPageComponent;
  let fixture: ComponentFixture<PanelmenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelmenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelmenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
