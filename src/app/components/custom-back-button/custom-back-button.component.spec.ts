import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBackButtonComponent } from './custom-back-button.component';

describe('CustomBackButtonComponent', () => {
  let component: CustomBackButtonComponent;
  let fixture: ComponentFixture<CustomBackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomBackButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
