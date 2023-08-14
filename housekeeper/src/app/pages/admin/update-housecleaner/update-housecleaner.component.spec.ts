import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHousecleanerComponent } from './update-housecleaner.component';

describe('UpdateHousecleanerComponent', () => {
  let component: UpdateHousecleanerComponent;
  let fixture: ComponentFixture<UpdateHousecleanerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateHousecleanerComponent]
    });
    fixture = TestBed.createComponent(UpdateHousecleanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
