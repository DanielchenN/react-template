import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>goodbye world</div>
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
