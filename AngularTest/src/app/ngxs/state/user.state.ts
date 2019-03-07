import {State, Action, StateContext, Selector} from '@ngxs/store'
import {User} from '../model/User'
import { AddUser } from '../action/user.action'

export class UserstateModel {
    users : User[]

}

@State<UserstateModel>({
    name : 'userState',
    defaults : {
        users : []
    }
})
export class UserState {
    @Action(AddUser)
    add({getState, patchState} : StateContext<UserstateModel>, {user} : AddUser) {
        const state = getState()
        patchState({
            users : [...state.users, user]
        })
    }

    //위의 방식으로 액션 발생 시, state 관리만 해도 되지만,
    //그렇게 해도 component 에서 state 값을 획득할 수도 있지만...

    @Selector()
    static getUsers(state : UserstateModel) {
        return state.users
    }
}