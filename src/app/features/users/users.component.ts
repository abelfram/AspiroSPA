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
  users: Users;
  constructor(private usersService: UsersService) {
      this.users = {name: '', dni: ''}
  }

  create() {
    this.usersService.createUser(this.users).subscribe(
    response => console.log('Usuario creado:', response),
    error => console.error('Error al crear usuario:', error)
    );
  }

  read() {

  }

  Update() {

  }

  Delete(){
    
  }
}
