import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


const routes: Routes = [
  { path: '', component: UsersComponent}
]
@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class UsersModule { }
