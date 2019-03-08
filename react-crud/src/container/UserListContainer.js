
import React from 'react'
import { connect } from 'react-redux'
import { UserList } from '../component/UserList'
import { getServerDataAction, deleteUserDataAction } from '../action'


class UserListContainer extends React.Component {
    componentDidMount(){

        this.props.getServerDataAction();
    }
    render(){
        return (
            <UserList 
                users={this.props.users}
                history={this.props.history}
                onDelete={this.props.onDelete}
                />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userList
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        getServerDataAction: (path) => {
            dispatch(getServerDataAction(path))
        },
        onDelete(id){
            dispatch(deleteUserDataAction(id,props.history))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListContainer)