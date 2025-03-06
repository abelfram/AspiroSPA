import { Component } from '@angular/core';
import { UsersService } from 'src/app/features/users/services/http/users.service';
import { Users } from 'src/app/core/models/users';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  title: 'AspiroSPA';
  users: Users[] = [];
  editingUserId: number | null = null;
  editedUser: Users = { id: 0, name: '', surname: '', dni: '', email: '', birthDate: new Date};
  dataSource = new MatTableDataSource<Users>(); 
  displayedColumns: string[] = ['name', 'surname', 'dni', 'email', 'birthDate', 'actions', 'add'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private usersService: UsersService
    ) {  }

  ngOnInit(){
    this.read();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  

  read() {
    this.usersService.readUsers().subscribe(
      (response: Users[]) => {
        console.log('Usuarios obtenidos correctamente', response);
        this.users = response;
        this.dataSource.data = response;
      },
      error => console.error('Error al obtener los usuarios', error)
    );
  }

  Filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

  Update() {
    if (this.editingUserId !== null) {
      this.usersService.updateUsers(this.editedUser).subscribe(
        response => {
          console.log('Usuario actualizado correctamente', response);
          this.users[this.editingUserId!] = { ...this.editedUser };
          this.editingUserId = null;
        },
        error => console.error('Error al actualizar el usuario', error)
      );
      this.read();
    }
  }

  StartEditing(user: Users){
    this.editingUserId = user.id;
    this.editedUser = { ...user}
  }
  
  cancelEdit(){
    this.editingUserId = null;
  }

  Delete(id: number) {
    this.usersService.deleteUser(id).subscribe(
      response => {
        console.log(`Usuario con Id ${id} eliminado correctamente`, response);
        this.read();
      },
      error => console.error(`Error al eliminar usuario con Id ${id}`, error)
    )
  }
}