import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CGUPage } from './cgu.component';

describe('CGUPage', () => {
  let component: CGUPage;
  let fixture: ComponentFixture<CGUPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CGUPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CGUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
