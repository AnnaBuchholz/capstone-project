import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulinaryMathPageComponent } from './culinary-math-page.component';

describe('CulinaryMathPageComponent', () => {
  let component: CulinaryMathPageComponent;
  let fixture: ComponentFixture<CulinaryMathPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulinaryMathPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulinaryMathPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
