import { Injectable }    from '@angular/core';

import { User } from './user';

@Injectable()
export class UserService {
  
  USERS: User[] = [
    { id: 1, name: 'KKANG', 'phone': '01011111', 'email':'a@a.com' },
    { id: 2, name: 'KIM', 'phone':  '01011222', 'email':'b@a.com' },
    { id: 3, name: 'LEE',  'phone': '01011333', 'email':'c@a.com' },
    { id: 4, name: 'PARK',  'phone': '01011444', 'email':'d@a.com' },
    { id: 5, name: 'HONG' , 'phone': '01011555', 'email':'e@a.com' }
  ];


  getUsers() {
    return this.USERS;
  }
  
  getUser(id): User {
    return this.USERS.find(user => user.id == id);
  }
}