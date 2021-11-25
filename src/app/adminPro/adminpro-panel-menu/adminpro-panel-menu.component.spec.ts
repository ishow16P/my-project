import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproPanelMenuComponent } from './adminpro-panel-menu.component';

describe('AdminproPanelMenuComponent', () => {
  let component: AdminproPanelMenuComponent;
  let fixture: ComponentFixture<AdminproPanelMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminproPanelMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminproPanelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
