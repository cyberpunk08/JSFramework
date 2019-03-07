import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component'
import { AddUserComponent } from './components/add-user/add-user.component'
import { EditUserComponent} from './components/edit-user/edit-user.component'

const routes: Routes = [
  {path : 'list-user', component : ListUserComponent},
  {path : 'add-user', component : AddUserComponent},
  {path : 'edit-user/:id', component : EditUserComponent},
  {path: '', component : ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
