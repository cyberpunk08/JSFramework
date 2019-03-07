import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../router.service'
import { User } from '../user';


@Component({
  selector: 'app-routerlist',
  templateUrl: './routerlist.component.html',
  styleUrls: ['./routerlist.component.css']
})
export class RouterlistComponent implements OnInit {
  users : User[]

  constructor(
    private router : Router,
    private userService : UserService
  ) { }

  ngOnInit() {
    this.users = this.userService.getUsers()
  }

  gotoDetail(user:User) {
    //화면전환... detail로.. id 값 넘겨서..
    let link = ['/user', user.id]
    this.router.navigate(link)
  }

}
