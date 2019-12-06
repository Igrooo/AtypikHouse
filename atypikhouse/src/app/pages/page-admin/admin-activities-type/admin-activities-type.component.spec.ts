import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActivitiesTypeComponent } from './admin-activities-type.component';

describe('AdminActivitiesTypeComponent', () => {
  let component: AdminActivitiesTypeComponent;
  let fixture: ComponentFixture<AdminActivitiesTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminActivitiesTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivitiesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
