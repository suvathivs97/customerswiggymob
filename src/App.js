import React, { Component } from 'react'
import "./App.css";
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mainpage from './Components/MainPage'
import Head from './Components/Head'
import Bottom from './Components/Bottom'

 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
           <Route path="/Head" component={Head} exact />
           <Route path="/" component={Mainpage} exact />
           <Route path="/Bottom" component={Bottom} exact />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
