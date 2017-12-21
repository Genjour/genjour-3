import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteQuotationComponent } from './write-quotation.component';

describe('WriteQuotationComponent', () => {
  let component: WriteQuotationComponent;
  let fixture: ComponentFixture<WriteQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
