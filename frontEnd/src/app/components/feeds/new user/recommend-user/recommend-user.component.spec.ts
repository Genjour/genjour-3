import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendUserComponent } from './recommend-user.component';

describe('RecommendUserComponent', () => {
  let component: RecommendUserComponent;
  let fixture: ComponentFixture<RecommendUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
