import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathWarsPageComponent } from './math-wars-page.component';

describe('MathWarsPageComponent', () => {
  let component: MathWarsPageComponent;
  let fixture: ComponentFixture<MathWarsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathWarsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathWarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
