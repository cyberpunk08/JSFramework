import React from 'react'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import appState from './reducer'
import { ReduxMain } from './component'

let store = createStore (
    appState
)

export default class ReduxApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxMain/>
            </Provider>
        )
    }
}