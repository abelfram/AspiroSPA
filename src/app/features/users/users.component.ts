import { Component } from '@angular/core';
import { UsersService } from 'src/app/features/users/services/http/users.service';
import { Users } from 'src/app/core/models/users';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  title: 'AspiroSPA';
  users: Users[] = [];
  filteredUsers: Users[] = [];
  editingUserId: number | null = null;
  editedUser: Users = { id: 0, name: '', surname: '', dni: '', email: '', birthDate: new Date};
  newUser: Users = { id: 0, name: '', surname: '', dni: '', email: '', birthDate: new Date};

  constructor(
    private usersService: UsersService,
     private snackBar: MatSnackBar
    ) {  }

  ngOnInit(){
    this.read();
  }

  create() {
    
    if (!this.newUser.name || !this.newUser.dni) {
      this.snackBar.open('Por favor, completa todos los campos.', 'Cerrar', { duration: 3000 });
      return;
    }

    this.usersService.createUser(this.newUser).subscribe(
      response => {
        console.log('Usuario creado:', response),
        this.users.push(response);
        this.newUser = { id: 0, name: '', surname: '', dni: '', email: '', birthDate: new Date }
    },
      error => console.error('Error al crear usuario:', error)
    );
    this.read();
  }

  read() {
    this.usersService.readUsers().subscribe(
      (response: Users[]) => {
        console.log('Usuarios obtenidos correctamente', response);
        this.users = response;
        this.filteredUsers = response;
      },
      error => console.error('Error al obtener los usuarios', error)
    );
  }

  Filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();

    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(filterValue) ||
      user.dni.toLowerCase().includes(filterValue)
    );
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