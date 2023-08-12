import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHouseKeeperComponent } from './add-house-keeper.component';

describe('AddHouseKeeperComponent', () => {
  let component: AddHouseKeeperComponent;
  let fixture: ComponentFixture<AddHouseKeeperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHouseKeeperComponent]
    });
    fixture = TestBed.createComponent(AddHouseKeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
