import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTypoComponent } from './demo-typo.component';

describe('DemoTypoComponent', () => {
  let component: DemoTypoComponent;
  let fixture: ComponentFixture<DemoTypoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTypoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTypoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
