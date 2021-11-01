import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryAdvanceListComponent } from './salary-advance-list.component';

describe('SalaryAdvanceListComponent', () => {
  let component: SalaryAdvanceListComponent;
  let fixture: ComponentFixture<SalaryAdvanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryAdvanceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryAdvanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
