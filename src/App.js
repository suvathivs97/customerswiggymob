import React, { Component } from 'react'
import "./App.css";
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mainpage from './Components/MainPage'
import SingleRestaurant from './Components/SingleRestaurant'
import CartPage from './Components/CartPage'
import Location from './Components/Location'
import Profilemainpage from './Components/Profilemainpage'
 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
           <Route path="/" component={Mainpage} exact />
           <Route path="/SingleRestaurant/:id/:address/:city/:restaurant/:image" component={SingleRestaurant} />
           <Route path="/CartPage" component={CartPage} />
           <Route path="/Location" component={Location} />
           <Route path="/Profilemainpage/:name" component={Profilemainpage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
