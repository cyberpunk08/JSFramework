import React, { Component } from 'react';

// redux-form : form 쪽 핸들링시 유용
// 유저 입력 데이터르 자동 획득해서 redux 의 reducer 에게
// 저장까지 해준 
import { Field, reduxForm } from 'redux-form';

export class EditUser extends Component {
    url = null
    param = null

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        this.url = this.props.match.url
        this.param = this.props.match.params.id
    }

    handleSubmit(user) {
        // alert('submit......')
        // this.props.history.push('/add')
        // event.preventDefault();
        this.props.onSubmit(user)
    }
    render() {
        return (
            <div>
                <div className="col-md-6">
                    <h2 className="text-center">
                        {this.url==='/add' ? 'Add User' : 'Update User'}
                    </h2>

                    <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                        <div className="form-group">
                            <label>Email address:</label>
                            <Field component="input" placeholder="email" name="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label>First Name:</label>
                            <Field component="input" placeholder="firstName" name="firstName" className="form-control" id="firstName" />
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <Field component="input" placeholder="lastName" name="lastName" className="form-control" id="lastName" />
                        </div>
                        <button className="btn btn-success" type="submit">
                        {this.url==='/add' ? 'Add' : 'Update'}
                        </button>
                    </form>
                </div>
            </div>

        )
    }
}