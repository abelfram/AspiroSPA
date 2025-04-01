import { Component } from '@angular/core';
import { TasksService } from './services/http/tasks.service';
import { Tasks } from 'src/app/core/models/tasks';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent {
  tasks: Tasks[] = [];

  displayedColumns: string[] = ['name', 'description', 'createdAt'];
  dataSource = new MatTableDataSource<Tasks>();


  constructor(
    private tasksService: TasksService
  ){}

  ngOnInit(){
    this.read();
  }

  read(){
    this.tasksService.read().subscribe(
      (response: Tasks[]) => {
        console.log('Usuarios obtenidos correctamente', response);
        this.tasks = response;
        this.dataSource.data = response
      },
      error => console.error('Error al obtener las tareas', error)
    )
  }
}
