import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportQuotationComponent } from './support-quotation.component';

describe('SupportQuotationComponent', () => {
  let component: SupportQuotationComponent;
  let fixture: ComponentFixture<SupportQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
