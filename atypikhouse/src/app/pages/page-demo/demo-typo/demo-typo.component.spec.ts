import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTypoPage } from './demo-typo.component';

describe('DemoTypoPage', () => {
  let component: DemoTypoPage;
  let fixture: ComponentFixture<DemoTypoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTypoPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTypoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
