import React, { Component } from 'react';
// import { UserList } from './component/UserList'
// import { EditUser } from './component/EditUser'
import { RouterRoot } from './router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appState from './reducer'


// store에 reducer 및 middleware 등록
let store = createStore(appState, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <RouterRoot/>
        </Provider>
      </div>
    );
  }
}

export default App;
