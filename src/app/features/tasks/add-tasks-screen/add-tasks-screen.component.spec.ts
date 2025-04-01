import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTasksScreenComponent } from './add-tasks-screen.component';

describe('AddTasksScreenComponent', () => {
  let component: AddTasksScreenComponent;
  let fixture: ComponentFixture<AddTasksScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTasksScreenComponent]
    });
    fixture = TestBed.createComponent(AddTasksScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
