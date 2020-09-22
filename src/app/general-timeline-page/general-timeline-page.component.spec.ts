import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTimelinePageComponent } from './general-timeline-page.component';

describe('GeneralTimelinePageComponent', () => {
  let component: GeneralTimelinePageComponent;
  let fixture: ComponentFixture<GeneralTimelinePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTimelinePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTimelinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
