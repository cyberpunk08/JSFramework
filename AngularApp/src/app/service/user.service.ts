import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User} from '../model/user.model'

@Injectable()
export class UserService {
    baseUrl : string = "http://localhost:3001/users"

    constructor(private http : HttpClient) {}

    getUsers() {
        return this.http.get<User[]>(this.baseUrl)
    }

    createUser (user : User) {
        return this.http.post(this.baseUrl, user)
    }

    updateUser(user : User) {
        return this.http.put(this.baseUrl + "/" + user.id, user)
    }

    deleteUser(id : number) {
        return this.http.delete(this.baseUrl + "/" + id)
    }
}