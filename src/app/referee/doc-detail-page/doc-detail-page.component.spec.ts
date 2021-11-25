import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocDetailPageComponent } from './doc-detail-page.component';

describe('DocDetailPageComponent', () => {
  let component: DocDetailPageComponent;
  let fixture: ComponentFixture<DocDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
