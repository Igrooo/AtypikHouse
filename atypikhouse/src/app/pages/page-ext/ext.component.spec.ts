import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalPage } from './ext.component';

describe('ExternalPage', () => {
  let component: ExternalPage;
  let fixture: ComponentFixture<ExternalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
