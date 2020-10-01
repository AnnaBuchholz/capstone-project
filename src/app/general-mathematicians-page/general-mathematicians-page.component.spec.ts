import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMathematiciansPageComponent } from './general-mathematicians-page.component';

describe('GeneralMathematiciansPageComponent', () => {
  let component: GeneralMathematiciansPageComponent;
  let fixture: ComponentFixture<GeneralMathematiciansPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralMathematiciansPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMathematiciansPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
