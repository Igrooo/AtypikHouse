import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPage } from './all.component';

describe('AllPage', () => {
  let component: AllPage;
  let fixture: ComponentFixture<AllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
