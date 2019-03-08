import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { reduxForm } from 'redux-form';
import { formValueSelector } from 'redux-form';
import { EditUser } from '../component/EditUser';
import { addUserDataAction, updateUserDataAction } from '../action';  

class EditUserContainer extends React.Component{
    render(){
        return (
            <EditUser 
                match={this.props.match}
                onSubmit={this.props.onSubmit}

                //redux form 에서 제공
                handleSubmit={this.props.handleSubmit}/>

        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSubmit: (user) => {
            if(props.match.params.id){
                let updateData={
                    ...user,
                    id:props.match.params.id
                }
                dispatch(updateUserDataAction(updateData,props.history))
            }else{
                dispatch(addUserDataAction(user,props.history))
            }
            
        }
    }
}

const mapStateToProps=(state, props) => {
    let user=state.userList.filter(user=>
        user.id==props.match.params.id)[0]
    if(user){
        return{
            user: user,
            initialValues:{
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }
        }
    }else{
        return {
            user: user
        }
    }        
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form:'userForm'
    })
)(EditUserContainer)