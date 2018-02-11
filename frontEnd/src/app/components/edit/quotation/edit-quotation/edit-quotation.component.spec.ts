import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuotationComponent } from './edit-quotation.component';

describe('EditQuotationComponent', () => {
  let component: EditQuotationComponent;
  let fixture: ComponentFixture<EditQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
