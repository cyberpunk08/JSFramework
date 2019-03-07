//app 상태데이터 유지...
import { combineReducers } from 'redux'

//reducer는 이전 상태값과 현재 action을 매개변수로 받는 함수이다.
const myReducer = (state = '', action) => {
    switch(action.type) {
        case 'TEST_ACTION' :
            return action.data
        
        default : 
            return state
    }
}

//reducer 조합
const appState = combineReducers({
    testReducer : myReducer
})

export default appState