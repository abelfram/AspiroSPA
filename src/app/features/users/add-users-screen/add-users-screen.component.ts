import { Component } from '@angular/core';
import { Users } from 'src/app/core/models/users';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/features/users/services/http/users.service';


@Component({
  selector: 'app-add-users-screen',
  templateUrl: './add-users-screen.component.html',
  styleUrls: ['./add-users-screen.component.scss']
})
export class AddUsersScreenComponent {
  newUser: Users = { id: 0, name: '', surname: '', dni: '', email: '', birthDate: new Date()};
  users: Users[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private usersService: UsersService
  ){}

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
  }

}
