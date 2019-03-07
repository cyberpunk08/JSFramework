//react 의 기초 api
import React from 'react'
//최종화면 출력
import ReactDOM from 'react-dom';


const name = "kkang"
const user = {
    firstName : "gildong",
    lastName : "hong"
}

function formatName(obj) {
    return obj.firstName + ` ` + obj.lastName
}

//JSX 동적 데이터를 {}에 바인딩
const element = 
    <div>
        <h3>JSX Test...</h3>
        <div>Hello... {name}</div>
        <div>{user.firstName} {user.lastName}</div>
        <div>{10 + 20}</div>
        <div>{formatName(user)}</div>
    </div>;

const element2 = <div>element2</div>;

//JSX 자체가 element 이다. 즉 JSX 구문이 다른 JSX 구문에 포함될 수 있다.
const element3 =
    <div>
        {element} {element2}
    </div>;

ReactDOM.render(
    element3,
    document.getElementById('test1')
)