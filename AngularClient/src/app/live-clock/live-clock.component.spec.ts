import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveClockComponent } from './live-clock.component';

describe('LiveClockComponent', () => {
  let component: LiveClockComponent;
  let fixture: ComponentFixture<LiveClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
