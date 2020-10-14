import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnConwayPageComponent } from './john-conway-page.component';

describe('JohnConwayPageComponent', () => {
  let component: JohnConwayPageComponent;
  let fixture: ComponentFixture<JohnConwayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JohnConwayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JohnConwayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
