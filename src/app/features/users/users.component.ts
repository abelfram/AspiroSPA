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
  editingIndex: number | null = null;
  editedUser: Users = { id: 0, name: '', dni: ''};

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
    if (this.editingIndex !== null) {
      this.usersService.updateUsers(this.editedUser).subscribe(
        response => {
          console.log('Usuario actualizado correctamente', response);
          this.users[this.editingIndex!] = { ...this.editedUser };
          this.editingIndex = null;
        },
        error => console.error('Error al actualizar el usuario', error)
      );
    }
  }

  StartEditing(index: number){
    this.editingIndex = index;
    this.editedUser = { ...this.users[index]}
  }
  
  cancelEdit(){
    this.editingIndex = null;
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
