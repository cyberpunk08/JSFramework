import React, { Component } from 'react';
import { UserItem } from './UserItem'

export class UserList extends Component {
    users=[
        { id: 1, email: 'a@a.com', firstName: 'aaa', lastName: 'aaa' },
        { id: 2, email: 'b@b.com', firstName: 'bbb', lastName: 'bbb' }]
    render() {
        return (
            <div className='comments'>
                <div className="col-md-6">
                    <h2> User List</h2>
                    <button className="btn btn-danger" onClick={e => {
                        e.preventDefault()
                        this.props.history.push('/add')
                    }}> Add User</button>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="hidden">Id</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.users.map(user =>
                                <UserItem
                                    key={user.id}
                                    user={user}
                                    onDelete={() => {
                                        this.props.onDelete(user.id)
                                        // alert('onDelete....')

                                    }}
                                    history={this.props.history}
                                />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

