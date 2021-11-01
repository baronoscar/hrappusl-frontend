import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDisplaysComponent } from './top-displays.component';

describe('TopDisplaysComponent', () => {
  let component: TopDisplaysComponent;
  let fixture: ComponentFixture<TopDisplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDisplaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDisplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
