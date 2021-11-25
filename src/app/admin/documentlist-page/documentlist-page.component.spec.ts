import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentlistPageComponent } from './documentlist-page.component';

describe('DocumentlistPageComponent', () => {
  let component: DocumentlistPageComponent;
  let fixture: ComponentFixture<DocumentlistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentlistPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentlistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
