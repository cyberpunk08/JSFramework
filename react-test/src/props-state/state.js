import React from 'react'

class Todo extends React.Component {
    _onDelete() {
        this.props.onDelete(this.props.todo.id)
    }

    render() {
        return (
            <div>
                <span>{this.props.todo.text}</span>
                <button onClick={this._onDelete.bind(this)}>
                    delete
                </button>
            </div>
        )
    }
}

//ajax
var request =  require('superagent')

export class TodoListComponent extends React.Component {
    constructor() {
        super()
        this.state={todos:[]}
    }

    //lifecycle 함수
    componentDidMount() {
        var self = this;

        request.get('test.json')
            .accept('application/json')
            .end(function(err,res) {
                if(err) throw err;
                self.setState({
                    todos : self.state.todos.concat(
                        res.body.datas
                    )
                })
            })
    }

    //하위전달함수
    deleteTodo(id) {
        this.setState({
            todos : this.state.todos.filter((todo) => {
                return todo.id !== id
            })
        })
    }

    render() {
        var todos = this.state.todos.map((todo) => {
            return <li key={todo.id}>
                <Todo onDelete={this.deleteTodo.bind(this)}
                    todo={todo}/>
            </li>
        })
        return (
            <div>
                <h3>state test</h3>
                <ul>{todos}</ul>
            </div>
        )
    }
}