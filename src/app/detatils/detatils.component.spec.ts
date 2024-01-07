import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetatilsComponent } from './detatils.component';

describe('DetatilsComponent', () => {
  let component: DetatilsComponent;
  let fixture: ComponentFixture<DetatilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetatilsComponent]
    });
    fixture = TestBed.createComponent(DetatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
