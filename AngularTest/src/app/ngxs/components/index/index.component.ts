import { Component, OnInit } from '@angular/core';
import { Store, Select} from '@ngxs/store'
import { User } from '../../model/User'
import { Observable } from 'rxjs'
import {UserState} from '../../state/user.state'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  
  //state 값 획득...
  //방법 1.. Store를 이용해서 직접 state에 접근...
  // users : Observable<User>
  // constructor(private store : Store) { 
  //   this.users = this.store.select(state =>
  //     state.userState.users)
  // }

  //방법2... ,selector 이용
  // @Select(UserState.getUsers) 
  // users : Observable<User>

  //방법3.. @Select 에서 state 집접 이용
  @Select(state => state.userState.users)
  users : Observable<User>

  ngOnInit() {
  }

}
