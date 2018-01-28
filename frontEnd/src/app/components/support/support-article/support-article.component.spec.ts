import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportArticleComponent } from './support-article.component';

describe('SupportArticleComponent', () => {
  let component: SupportArticleComponent;
  let fixture: ComponentFixture<SupportArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
