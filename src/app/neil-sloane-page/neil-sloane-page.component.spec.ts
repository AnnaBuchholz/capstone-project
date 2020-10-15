import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeilSloanePageComponent } from './neil-sloane-page.component';

describe('NeilSloanePageComponent', () => {
  let component: NeilSloanePageComponent;
  let fixture: ComponentFixture<NeilSloanePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeilSloanePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeilSloanePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
