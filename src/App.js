import React, { Component } from 'react'
import "./App.css";
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mainpage from './Components/MainPage'
import SingleRestaurant from './Components/SingleRestaurant'
import CartPage from './Components/CartPage'
import Location from './Components/Location'
 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
           <Route path="/" component={Mainpage} exact />
           <Route path="/SingleRestaurant" component={SingleRestaurant} />
           <Route path="/CartPage" component={CartPage} />
           <Route path="/Location" component={Location} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
