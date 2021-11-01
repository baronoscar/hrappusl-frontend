import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisapprovedRequestsComponent } from './disapproved-requests.component';

describe('DisapprovedRequestsComponent', () => {
  let component: DisapprovedRequestsComponent;
  let fixture: ComponentFixture<DisapprovedRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisapprovedRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisapprovedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
