import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { MaterialModule } from '../material/material.module';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { AddTasksScreenComponent } from './add-tasks-screen/add-tasks-screen.component';

const routes: Routes = [
  {path: '', component: TasksComponent},
  {path: '', component: AddTasksScreenComponent}
]

@NgModule({
  declarations: [
    TasksComponent,
    AddTasksScreenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class TasksModule { }
