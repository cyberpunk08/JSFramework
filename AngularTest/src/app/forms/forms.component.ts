import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  addresses=['seoul','busan','inchon','seongnam']
  model=new User(1, 'kkang','010000001', this.addresses[0])
  submitted = false//화면에 보이는 부분 제어 때문에..

  onsubmit() { this.submitted = true }

  newUser(){
    this.model=new User(2,'','','')
  }
  constructor() { }

  ngOnInit() {
  }

}
