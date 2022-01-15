import React, { Component } from "react";
import Navbar from "./component/navbar";
import QuickMenu from "./component/quickMenu";
import ToolbarShopAndUser from "./component/toolbarShopAndUser";
import OrderByTell from "./component/orderByTell";
import MainPage from "./component/mainPage";
import { Switch, Route } from "react-router-dom";
import Products from "./component/products";
class Main extends Component {
  state = {
    shopList: [],
    products: [
      {
        id: 1,
        title: "مانستر   ",
        info: "دوتا همبرگر دستی حرفه ای با پیاز کاراملی و پنیر موزارلا و یک سس خاص",
        price: 99900,
        image: "images/bergers/monster.jpg",
        count: 1,
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
        count: 1,
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
        count: 1,
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
        count: 1,
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
        count: 1,
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
        count: 1,
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
        count: 1,
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
        count: 1,
      },
    ],
  };
  addItemToShopList = (item) => {
    let shopList = this.state.shopList;
    const index = shopList.findIndex((i) => item.id === i.id);
    if (index !== -1) shopList[index].count++;
    else shopList.push(item);
    this.setState({ shopList });
    console.log("addItemToShopList", shopList);
  };
  addItemToFavorite = (item) => {
    let products = this.state.products;
    const index = products.findIndex((i) => item.id === i.id);
    if (index !== -1) products[index].isFavorite = !products[index].isFavorite;
    else products.push(item);
    this.setState({ products });
    console.log("addItemToShopList", products);
  };

  render() {
    const liked = this.state.products.filter((i) => i.isFavorite);
    return (
      <div>
        <Navbar />
        <QuickMenu />
        <OrderByTell />
        <ToolbarShopAndUser shopList={this.state.shopList} liked={liked} />
        <Switch>
          <Route
            path="/products"
            render={(props) => (
              <Products
                {...props}
                addItemToShopList={this.addItemToShopList}
                addItemToFavorite={this.addItemToFavorite}
                products={this.state.products}
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
