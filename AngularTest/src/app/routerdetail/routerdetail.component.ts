import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {UserService} from '../router.service';
import {User} from '../user';

@Component({
  selector: 'app-routerdetail',
  templateUrl: './routerdetail.component.html',
  styleUrls: ['./routerdetail.component.css']
})

export class RouterdetailComponent implements OnInit {
  
  user : User;
  
  constructor(
    private userService : UserService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    //자신이 실행된 route 조건에서 parameter 값 획득..
    this.route.params.forEach((params : Params) => {
      let id = +params['id']
      this.user = this.userService.getUser(id)
    })
  }

  goBack() {
    window.history.back()
  }

}
