import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPerformanceTuningComponent } from './angular-performance-tuning.component';

describe('AngularPerformanceTuningComponent', () => {
  let component: AngularPerformanceTuningComponent;
  let fixture: ComponentFixture<AngularPerformanceTuningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [AngularPerformanceTuningComponent]
});
    fixture = TestBed.createComponent(AngularPerformanceTuningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
