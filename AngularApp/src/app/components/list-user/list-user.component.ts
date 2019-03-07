import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store'
import { User } from '../../model/user.model'
import { UserService } from '../../service/user.service'
import { LoadServerData } from '../../action/user.action'
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users : User[]

  constructor(
    private store : Store,
    private userService : UserService,
    private router : Router
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data=>{
      //데이터 획득 후, app 전역에서 데이터 유지 위해..
      //action 발생
      this.store.dispatch(new LoadServerData(data))
      this.users = data
    })
  }

  addUser() {
    this.router.navigate(['add-user'])
  }

  editUser(user : User) {
    let link = ['edit-user', user.id]
    this.router.navigate(link)
  }

  deleteUser(user : User) {
    this.userService.deleteUser(user.id)
    .subscribe(data => {
      this.users = this.users.filter(u => u != user)
    })
  }

}
