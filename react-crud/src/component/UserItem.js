import React, { Component } from 'react';

export class UserItem extends Component {
    render() {
        return (
            <tr>
                <td className="hidden">{this.props.user.id}</td>
                <td>{this.props.user.firstName}</td>
                <td>{this.props.user.lastName}</td>
                <td>{this.props.user.email}</td>
                <td><button className="btn btn-danger" onClick={e => {
                    e.preventDefault()
                    this.props.onDelete();
                }}>Delete</button>
                    <button className="btn btn-danger" onClick={e => {
                        e.preventDefault()
                        // alert('onUpdate')
                        this.props.history.push('/update/'+this.props.user.id)
                    }} style={{ marginLeft: 20 + 'px' }}> Update</button>
                </td>
            </tr>
        )
    }
} 