import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    focusEyes = (event) => {
        console.log("Good!")
    }

    blurEyes = (event) => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <button onFocus={this.focusEyes} onBlur={this.blurEyes} />
        )
    }
}
