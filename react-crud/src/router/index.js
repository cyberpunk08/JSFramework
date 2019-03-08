import React from 'react'
import { BrowserRouter, Route, Switch} 
    from 'react-router-dom'
import UserListContainer 
    from '../container/UserListContainer'
// import { EditUser } from '../component/EditUser'

import EditUserContainer from '../container/EditUserContainer';


export class RouterRoot extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={UserListContainer}></Route>
                            <Route exact path="/add" component={EditUserContainer}></Route>
                            <Route exact path="/update/:id" component={EditUserContainer}></Route>
                            <Route exact component={UserListContainer}></Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}