import { State, Action, StateContext, Selector } from '@ngxs/store'
import { User } from '../model/user.model'
import { LoadServerData } from '../action/user.action'
import { load } from '@angular/core/src/render3';

export class UserStateModel {
    users : User[]
}

@State<UserStateModel>({
    name : 'userState',
    defaults : {
        users: []
    }
})

export class UserState {
    @Action(LoadServerData)
    load({getState, patchState} : StateContext<UserStateModel>, 
        {serverData} : LoadServerData){
        const state = getState()
        patchState({
            users : [...state.users, ...serverData]
        })
    }
}