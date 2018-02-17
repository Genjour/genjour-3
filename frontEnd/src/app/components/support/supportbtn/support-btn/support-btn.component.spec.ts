import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportBtnComponent } from './support-btn.component';

describe('SupportBtnComponent', () => {
  let component: SupportBtnComponent;
  let fixture: ComponentFixture<SupportBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
