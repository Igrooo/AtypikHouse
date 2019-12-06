import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPicsComponent } from './admin-pics.component';

describe('AdminPicsComponent', () => {
  let component: AdminPicsComponent;
  let fixture: ComponentFixture<AdminPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
