//import 시 {}에 묶이지 않은 것은 파일에서 default로 export 시킨 것.
import React, { Component } from 'react'
import './test-jsx'

class Component1 extends React.Component {
    
    render(){
        return (
            <div>I am Component1</div>
        )
    }
}

//stateless functional component
var Component2 = ({}) => <div>I am Component2</div>

class ComponentMain extends Component {
    render() {
        return (
            <div>
                <Component1></Component1>
                <Component2></Component2>
            </div>
        )
    }
}

export default ComponentMain


