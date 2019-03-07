import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RouterlistComponent} from './routerlist/routerlist.component'
import {RouterdetailComponent} from './routerdetail/routerdetail.component'

const routes: Routes = [
  {path : '', redirectTo : '/users', pathMatch : 'full'},
  {path : 'user/:id', component : RouterdetailComponent},
  {path : 'users', component : RouterlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
