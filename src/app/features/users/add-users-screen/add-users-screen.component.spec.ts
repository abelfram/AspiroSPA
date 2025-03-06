import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsersScreenComponent } from './add-users-screen.component';

describe('AddUsersScreenComponent', () => {
  let component: AddUsersScreenComponent;
  let fixture: ComponentFixture<AddUsersScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUsersScreenComponent]
    });
    fixture = TestBed.createComponent(AddUsersScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
