import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQPage } from './faq.component';

describe('FAQPage', () => {
  let component: FAQPage;
  let fixture: ComponentFixture<FAQPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAQPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
