import React, { Component } from 'react'
import { render } from 'react-dom'
import io from 'socket.io-client'


class App extends Component{

    componentDidMount()
    {
        this.socket = io()
    }

    render(){
        return <p>Renderizado desde React</p>
    }
}

render(<App/>, document.getElementById('root'))