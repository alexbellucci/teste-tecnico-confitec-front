import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditarUsuarioComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'adicionar', component: AddUserComponent },
  { path: 'editar-usuario/:id', component: EditarUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
