import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route } from 'react-router-dom'
// import { AccountInfo } from './components/AccountInfo'

class App extends Component {
  render() {
    return (
      <div className="">
        <Route exact path="/" component={Home} />
        <Route path="/private" component={AccountInfo} />
      </div>
    )
  }
}

export default App
