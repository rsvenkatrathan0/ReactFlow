import React, { Component } from 'react'

class ScreenOne extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "Start" }
    }

    paggeTwo = () => {
        this.props.history.push({ pathname: '/screenTwo' })
    }

    render() {
        return (
            <p onClick={this.paggeTwo}><button>{this.state.name}</button> </p>
        )
    }

}
export default ScreenOne;