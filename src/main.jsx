import React, { Component } from "react";
import Navbar from "./component/navbar";
import QuickMenu from "./component/quickMenu";
import LoginBoxInMainPage from "./component/loginBoxInMainPage";
import OrderByTell from "./component/orderByTell";
import MainPage from "./component/mainPage";
import { Switch, Route } from "react-router-dom";
import Products from "./component/products";
class Main extends Component {
  state = { shopList: [] };
  addItemToShopList = (item) => {
    let shopList = this.state.shopList;
    shopList.push(item);
    this.setState({ shopList });
    console.log("addItemToShopList", shopList);
  };
  render() {
    return (
      <div>
        <Navbar />
        <QuickMenu />
        <OrderByTell />
        <LoginBoxInMainPage shopList={this.state.shopList}/>
        <Switch>
          <Route path="/products" component={Products} />
          <Route
            exact
            path="/"
            render={(props) => (
              <MainPage {...props} addItemToShopList={this.addItemToShopList} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Main;
