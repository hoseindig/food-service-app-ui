import React, { Component } from "react";
import Navbar from "./component/navbar";
import QuickMenu from "./component/quickMenu";
import LoginBoxInMainPage from "./component/loginBoxInMainPage";
import OrderByTell from "./component/orderByTell";
import MainPage from "./component/mainPage";
import { Switch,Route } from "react-router-dom";
import Products from "./component/products";
class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <QuickMenu />
        <OrderByTell />
        <LoginBoxInMainPage />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/" exact component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default Main;
