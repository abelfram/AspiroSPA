import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'main-page', loadChildren: () => import('./features/main-page/main-page.module').then(m => m.MainPageModule)},
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
