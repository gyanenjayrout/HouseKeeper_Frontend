import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserFeedbackComponent } from './viewuser-feedback.component';

describe('ViewuserFeedbackComponent', () => {
  let component: ViewuserFeedbackComponent;
  let fixture: ComponentFixture<ViewuserFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewuserFeedbackComponent]
    });
    fixture = TestBed.createComponent(ViewuserFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
