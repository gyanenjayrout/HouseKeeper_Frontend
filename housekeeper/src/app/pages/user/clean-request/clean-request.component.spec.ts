import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanRequestComponent } from './clean-request.component';

describe('CleanRequestComponent', () => {
  let component: CleanRequestComponent;
  let fixture: ComponentFixture<CleanRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CleanRequestComponent]
    });
    fixture = TestBed.createComponent(CleanRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
