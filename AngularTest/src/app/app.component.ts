import { Component } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = {
    id: 1,
    name: 'kkang',
    phone: '010000001',
    email: 'a@a.com'
  }
}
