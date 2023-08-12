import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewFeedbacksComponent } from './admin-view-feedbacks.component';

describe('AdminViewFeedbacksComponent', () => {
  let component: AdminViewFeedbacksComponent;
  let fixture: ComponentFixture<AdminViewFeedbacksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewFeedbacksComponent]
    });
    fixture = TestBed.createComponent(AdminViewFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
