import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansAdvanceComponent } from './loans-advance.component';

describe('LoansAdvanceComponent', () => {
  let component: LoansAdvanceComponent;
  let fixture: ComponentFixture<LoansAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansAdvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
