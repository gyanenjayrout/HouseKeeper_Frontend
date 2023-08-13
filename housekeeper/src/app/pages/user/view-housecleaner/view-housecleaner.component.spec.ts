import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHousecleanerComponent } from './view-housecleaner.component';

describe('ViewHousecleanerComponent', () => {
  let component: ViewHousecleanerComponent;
  let fixture: ComponentFixture<ViewHousecleanerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewHousecleanerComponent]
    });
    fixture = TestBed.createComponent(ViewHousecleanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
