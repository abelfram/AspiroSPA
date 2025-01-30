import { Component } from '@angular/core';
import { UsersService } from 'src/app/features/users/services/http/users.service';
import { Users } from 'src/app/core/models/users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  title: 'AspiroSPA';
  users: Users[] = [];
  newDni: string;
  selectedUser: Users = { name: '', dni: ''}

  constructor(private usersService: UsersService) {  }

  ngOnInit(){
    this.read();
  }

  create() {
    this.usersService.createUser(this.users).subscribe(
    response => console.log('Usuario creado:', response),
    error => console.error('Error al crear usuario:', error)
    );
  }

  read() {
    this.usersService.readUsers().subscribe(
      (response: Users[]) => {
        console.log('Usuarios obtenidos correctamente', response);
        this.users = response; 
      },
      error => console.error('Error al obtener los usuarios', error)
    );
  }

  Update() {
    this.usersService.updateUsers(this.newDni , this.users).subscribe(
      response => console.log('Usuario actualizado correctamente', response),
      error => console.error('Ha habido un error al actualizar el usuario', error)
    )
  }

  Delete(dni: string) {
    this.usersService.deleteUser(dni).subscribe(
      response => {
        console.log(`Usuario con DNI ${dni} eliminado correctamente`, response);
        this.read();
      },
      error => console.error(`Error al eliminar usuario con DNI ${dni}`, error)
    )
  }
}
