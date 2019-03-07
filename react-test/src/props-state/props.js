import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PropsTest1 extends Component {
    //prop type은 꼭 static으로..
    static propsTypes = {
        name : PropTypes.string.isRequired,
        url : PropTypes.string.isRequired,
        data : PropTypes.shape({
            img : PropTypes.string,
            width : PropTypes.number,
            height : PropTypes.number
        })
    }

    render(){
        var urlImage = `images/${this.props.data.img}`
        return (
            <div>
                <a href={this.props.url}>{this.props.name}</a>
                <span>
                    <img src={urlImage} width={this.props.data.width} height={this.props.data.height}/>
                </span>
            </div>
        )
    }
}

class PropsTest2 extends Component {
    static dafaultProps = {
        email : "a@a.com"
    }
    render() {
        return(
            <p>
                {this.props.name} - {this.props.email} - {this.props.address}
            </p>
        )
    }
}

PropsTest2.propsTypes = {
    name : PropTypes.string.isRequired
}

PropsTest2.defaultProps = {
    email : 'b@b.com',
    address : 'seoul'
}

var ImageData = {
    img :'google.png',
    width : 100,
    height : 30
}

export class PropsTestMain extends Component {
    render() {
        return (
            <div>
                <PropsTest1 data={ImageData}
                    url="http://www.google.com"
                    name="google"/>
                <PropsTest2 name="kkang"/>
            </div>
        )
    }
}