import React, { Component } from 'react'
import { render } from 'react-dom'


class App extends Component{

    render(){
        return <p>Renderizado desde React</p>
    }
}

render(<App/>, document.getElementById('root'))