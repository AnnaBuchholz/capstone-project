import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorFunPageComponent } from './calculator-fun-page.component';

describe('CalculatorFunPageComponent', () => {
  let component: CalculatorFunPageComponent;
  let fixture: ComponentFixture<CalculatorFunPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorFunPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorFunPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
