import React, { Component } from "react";
import Navbar from "./component/navbar";
import QuickMenu from "./component/quickMenu";
import ToolbarShopAndUser from "./component/toolbarShopAndUser";
import OrderByTell from "./component/orderByTell";
import MainPage from "./component/mainPage";
import { Switch, Route } from "react-router-dom";
import Products from "./component/products";
import { toast } from "react-toastify";

// import axios from "axios";
import http from "./api/httpService";
import config from "./config.json";

import OrderInfoModal from "./orderInfoModal";

class Main extends Component {
  state = {
    modalShow: false,
    orderInfoModalShow: false,
    shopList: [],
    ordersTracking: [],
    products: [
      {
        id: 1,
        title: "مانستر   ",
        info: "دوتا همبرگر دستی حرفه ای با پیاز کاراملی و پنیر موزارلا و یک سس خاص",
        price: 99900,
        image: "images/bergers/monster.jpg",
        count: 0,
        type: 1,
        isFavorite: false, //favorite
        isSpecialOffer: true,
      },
      {
        id: 2,
        title: "مانستر پپر  ",
        info: "دوتا همبرگر دستی حرفه ای با پپرونی و سیب زمینی سرخ شده و پنیر موزارلا و یک سس خاص",
        price: 119900,
        image: "./images/bergers/monster-peper.jpg",
        type: 1,
        isFavorite: false,
        isSpecialOffer: true,
        count: 0,
      },
      {
        id: 3,
        title: "مانستر چیزکراف      ",
        info: "دوتا همبرگر دستی حرفه ای با یک کراکف سرخ شده و پنیر موزارلا و یک سس خاص",
        price: 139900,
        image: "./images/bergers/monster-cheese keraf.jpg",
        type: 1,
        isFavorite: false,
        isSpecialOffer: true,
        count: 0,
      },
      {
        id: 4,
        title: "مانستر کینگ  ",
        info: "سه تا همبرگر دستی حرفه ای با کراکف و پپرونی و پنیر موزارلا و یک سس خاص      ",
        price: 169900,
        image: "./images/bergers/monster-king.jpg",
        type: 1,
        isFavorite: false,
        isSpecialOffer: true,
        count: 0,
      },

      {
        id: 5,
        title: "پیتزا مخصوص یک نفره (30 سانتی متری)        ",
        info: "خمیر پیتزا مخصوص، ژامبون %90، کوکتل پنیری، سس مخصوص، قارچ، فلفل دلمه ای، زیتون، پیاز، گوجه فرنگی، پنیر موزارلا، سس تک نفره        ",
        price: 108000,
        image: "./images/pizza/1.jpg",
        type: 2,
        isFavorite: false,
        isSpecialOffer: true,
        count: 0,
      },
      {
        id: 6,
        title: "پیتزا مخصوص خانواده (40 سانتی متری)        ",
        info: "خمیر پیتزا مخصوص، ژامبون %90، کوکتل پنیری، سس مخصوص، قارچ، فلفل دلمه ای، زیتون، پیاز، گوجه فرنگی، پنیر موزارلا، سس تک نفره        ",
        price: 223000,
        image: "./images/pizza/2.jpg",
        type: 2,
        isFavorite: false,
        isSpecialOffer: false,
        count: 0,
      },
      {
        id: 7,
        title: "پیتزا رست بیف یک نفره (30 سانتی متری)        ",
        info: "خمیر پیتزا مخصوص، راسته گوساله ریش ریش شده، قارچ، پنیر موزارلا، فلفل دلمه ای، زیتون سیاه، سس تک نفره        ",
        price: 144000,
        image: "./images/pizza/3.jpg",
        type: 2,
        isFavorite: false,
        isSpecialOffer: false,
        count: 0,
      },
      {
        id: 8,
        title: "پیتزا رست بیف خانواده (40 سانتی متری)        ",
        info: "خمیر پیتزا مخصوص، راسته گوساله ریش ریش شده، قارچ، پنیر موزارلا، فلفل دلمه ای، زیتون سیاه، سس تک نفره        ",
        price: 296000,
        image: "./images/pizza/4.jpg",
        type: 2,
        isFavorite: false,
        isSpecialOffer: false,
        count: 0,
      },
    ],
  };
  addItemToShopList = (item) => {
    let shopList = this.state.shopList;
    debugger;
    const index = shopList.findIndex((i) => item.id === i.id);
    if (index !== -1) shopList[index].count++;
    else {
      item.count++;
      shopList.push(item);
    }

    this.setState({ shopList });
    console.log("addItemToShopList", shopList);
  };
  addItemToFavorite = (item) => {
    let products = this.state.products;
    const index = products.findIndex((i) => item.id === i.id);
    if (index !== -1) products[index].isFavorite = !products[index].isFavorite;
    else products.push(item);
    this.setState({ products });
    console.log("addItemToFavorite", products);
  };

  deleteItemToShopList = (item) => {
    let shopList = this.state.shopList;
    let products = this.state.products;
    const index = shopList.findIndex((i) => item.id === i.id);
    const indexproducts = products.findIndex((i) => item.id === i.id);
    if (index !== -1) shopList.splice(index, 1);
    if (indexproducts !== -1) products[indexproducts].count = 0;
    else shopList.push(item);
    this.setState({ shopList, products });
    console.log("deleteItemToShopList", shopList);
  };

  increaseDecreaseItemToShopList = (item, p) => {
    let shopList = this.state.shopList;
    // debugger;
    const index = shopList.findIndex((i) => item.id === i.id);
    if (index !== -1) {
      p ? shopList[index].count++ : shopList[index].count--;

      if (shopList[index].count === 0) shopList.splice(index, 1);
      this.setState({ shopList });
      console.log("deleteItemToShopList", shopList);
    }
  };

  confirmShopList = () => {
    this.setOrderInfoModalShowShow();
  };

  sendShopList = async () => {
    let { shopList, ordersTracking } = this.state;
    const data = await http.post(config.apiEndpoint + "order/new", {
      data: { shopList },
    });
    if (data.data.isSucsses) {
      ordersTracking.push({
        ...data.data.order,
        issueTracking: data.data.issueTracking,
      });
      shopList=[]
      this.setState({ shopList, ordersTracking });
      this.setOrderInfoModalShowShow();
      toast.success("ثبت شفارش موفق بود.");
    } else toast.error("صبت سفارش انجام نشد");

    debugger;
  };
  setOrderInfoModalShowShow = (p) => {
    if (p) this.setState({ orderInfoModalShow: p });
    let orderInfoModalShow = !this.state.orderInfoModalShow;
    this.setState({ orderInfoModalShow });
  };

  render() {
    const liked = this.state.products.filter((i) => i.isFavorite);
    return (
      <div>
        <OrderInfoModal
          sendShopList={this.sendShopList}
          show={this.state.orderInfoModalShow}
          setShow={this.setOrderInfoModalShowShow}
          data={this.state.shopList}
        />
        <Navbar />
        <QuickMenu />
        <OrderByTell />
        <ToolbarShopAndUser
          deleteItemToShopList={this.deleteItemToShopList}
          increaseDecreaseItemToShopList={this.increaseDecreaseItemToShopList}
          shopList={this.state.shopList}
          ordersTracking={this.state.ordersTracking}
          liked={liked}
          confirmShopList={this.confirmShopList}
        />
        <Switch>
          <Route
            path="/products"
            render={(props) => (
              <Products
                {...props}
                addItemToShopList={this.addItemToShopList}
                addItemToFavorite={this.addItemToFavorite}
                products={this.state.products}
                shopList={this.state.shopList}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <MainPage
                {...props}
                addItemToShopList={this.addItemToShopList}
                addItemToFavorite={this.addItemToFavorite}
                products={this.state.products}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Main;
