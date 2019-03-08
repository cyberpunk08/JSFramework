import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const userListReducer=(state=[], action) => {
    switch(action.type){
        case 'LIST_USER_ACTION':
            return action.serverListData
        default:
            return state
    }
}

const appState = combineReducers({
    userList: userListReducer,
    form: formReducer
})


export default appState

