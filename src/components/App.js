import React, { Component } from 'react'

import NavigationBar from './NavigationBar'

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                {/* <NavigationBar/> */}
                {this.props.children}
                <h1>Hello world I am awesome</h1>
            </div>
        );
    }
}