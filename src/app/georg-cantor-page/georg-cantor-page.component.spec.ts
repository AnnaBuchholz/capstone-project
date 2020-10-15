import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgCantorPageComponent } from './georg-cantor-page.component';

describe('GeorgCantorPageComponent', () => {
  let component: GeorgCantorPageComponent;
  let fixture: ComponentFixture<GeorgCantorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeorgCantorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeorgCantorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
