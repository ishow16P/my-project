import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproDocumentPageComponent } from './adminpro-document-page.component';

describe('AdminproDocumentPageComponent', () => {
  let component: AdminproDocumentPageComponent;
  let fixture: ComponentFixture<AdminproDocumentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminproDocumentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminproDocumentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
