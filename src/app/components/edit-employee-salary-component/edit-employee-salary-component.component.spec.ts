import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeSalaryComponentComponent } from './edit-employee-salary-component.component';

describe('EditEmployeeSalaryComponentComponent', () => {
  let component: EditEmployeeSalaryComponentComponent;
  let fixture: ComponentFixture<EditEmployeeSalaryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeSalaryComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeSalaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
