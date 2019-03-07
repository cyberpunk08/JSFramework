import React from 'react'
//component와 redux 연결의 핵심
import { connect } from 'react-redux'
//import 파일명이 index.js 이면 파일명 명시하지 않아도 된다
import { testAction } from '../action'

class Component1 extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {inputData : ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({inputData : event.target.value})
    }

    handleSubmit(event) {
        this.props.onSubmit(this.state.inputData)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h2>Redux Test</h2>
                <form onSubmit={this.handleSubmit}>
                    name : <input type="text" value={this.state.inputData}
                            onChange={this.handleChange}/>
                    <input type="submit" value="submit"/>
                    <div>{this.props.result}</div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    //여기서 리턴시킨 함수가 등록된 component 에 props 로 전달된다.
    return {
        onSubmit : (value) => {
            dispatch(testAction(value)) //Action 발생
        }
    }
}

const mapStateToProps = (state) => {
    return {
        //testResult는 .. reducer에 등록한 키
        result : state.testReducer    
    }
}

//매개변수로 component를 받아 cpmponent 를 리턴...
//첫번째 state 값을 받는 개발자 함수
//두번째 dispatcher를 받는 개발자 함수
//둘다 써도 되고, 하나만 써도 되고...
const TestComponent1 = connect(mapStateToProps, mapDispatchToProps)(Component1)

const Component2 = ({result}) => (
    <div>
        I am Component2
        <br/>
        {result}
    </div>
)

const TestComponent2 = connect(mapStateToProps, null)(Component2)

export const ReduxMain = () => (
    <div>
        <TestComponent1></TestComponent1>
        <TestComponent2></TestComponent2>
    </div>
)

