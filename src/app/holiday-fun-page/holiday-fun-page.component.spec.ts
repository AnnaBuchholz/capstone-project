import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayFunPageComponent } from './holiday-fun-page.component';

describe('HolidayFunPageComponent', () => {
  let component: HolidayFunPageComponent;
  let fixture: ComponentFixture<HolidayFunPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayFunPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayFunPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
