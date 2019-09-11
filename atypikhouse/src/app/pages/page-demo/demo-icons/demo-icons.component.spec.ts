import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoIconsPage } from './demo-icons.component';

describe('DemoIconsPage', () => {
  let component: DemoIconsPage;
  let fixture: ComponentFixture<DemoIconsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoIconsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoIconsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
