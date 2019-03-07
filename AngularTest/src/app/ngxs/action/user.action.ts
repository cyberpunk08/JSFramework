import { User } from '../model/User'

export class AddUser {
    static readonly type = '[User] add'

    //action 발생 시, 그 action에 추가되어야 하는 데이터
    constructor (public user : User) {}
}