import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDrumAppComponent } from './live-drum-app.component';

describe('LiveDrumAppComponent', () => {
  let component: LiveDrumAppComponent;
  let fixture: ComponentFixture<LiveDrumAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveDrumAppComponent]
    });
    fixture = TestBed.createComponent(LiveDrumAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
