import React, { Component } from "react";
import Navbar from "./component/navbar";
import QuickMenu from "./component/quickMenu";
import ToolbarShopAndUser from "./component/toolbarShopAndUser";
import OrderByTell from "./component/orderByTell";
import MainPage from "./component/mainPage";
import { Switch, Route } from "react-router-dom";
import Products from "./component/products";
import { toast } from "react-toastify";
// import io from 'socket.io-client';

// import axios from "axios";
import http from "./api/httpService";
import config from "./config.json";

import OrderInfoModal from "./orderInfoModal";
import UsreState from './component/userState';

import socket from './socket'

class Main extends Component {
  state = {
    modalShow: false,
    stateOrderText: [
      { id: 1, text: "  در انتظار تایید" },
      { id: 2, text: " تایید شده" },
      { id: 3, text: " آماده" },
      { id: 4, text: " لغو شده" },
    ],
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
    userData: {
      username: 'hs',
      password: 1,
      name: 'hossein',
      familyName: 'sheikhi',
    }
    ,
    users: [], user: {}, selectedUser: {}, usernameAlreadySelected: false, messages: []
  };
  addItemToShopList = (item) => {
    let { shopList } = this.state;
    debugger;
    const index = shopList.findIndex((i) => item.id === i.id);
    if (index !== -1) shopList[index].count++;
    else {
      if (!item.count) item.count = 0;
      item.count++;
      item.serveType = 99; //initernet order
      // shopList.push(item);
      shopList = [...shopList, item];
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
  handleGetOrderStateListener(p) {
    console.log("%chandleGetOrderStateListener", "background:blue", p);
  }
  handleGetOrderListener(p) {
    debugger
    console.log("%chandleGetOrderListener", "background:blue", p);

    let { ordersTracking, stateOrderText } = this.state;

    ordersTracking.forEach((element, index) => {
      console.log(p.trackNumber);
      if (p.trackNumber === element.id) {
        // debugger;
        let msg = stateOrderText.find((i) => i.id === p.state);
        if (msg)
          toast("   وضعیت سفارش :  " + msg.text);
        ordersTracking[index] = { ...element, state: p.state };
      }
    });
    this.setState({ ordersTracking });
  }
  sendShopList = async () => {
    let { shopList, ordersTracking } = this.state;
    const data = await http.post(config.apiEndpoint + "order/new", {
      data: { shopList },
    });
    if (data.data.isSucsses) {
      debugger;
      // get order state by sokect
      // const { socket } = this.props;
      if (socket) {
        //requast

        const sendObj = { tackingNumber: data.data.issueTracking, to: 'j7EJo-xeB9KT3PJ6AAAF' }
        socket.emit("getOrderState", sendObj);
        //listen from respond
        socket.on("getOrderState", (res) =>
          this.handleGetOrderStateListener(res)
        );
      }
      ////////////////////////////
      ordersTracking.push({
        ...data.data.order,
        issueTracking: data.data.issueTracking,
      });
      shopList = [];
      this.setState({ shopList, ordersTracking });
      this.setOrderInfoModalShowShow();
      toast.success("ثبت شفارش موفق بود.");
    } else {
      toast.error("ثبت سفارش انجام نشد");
      this.setOrderInfoModalShowShow();
    }

    // debugger;
  };
  setOrderInfoModalShowShow = (p) => {
    if (p) this.setState({ orderInfoModalShow: p });
    let orderInfoModalShow = !this.state.orderInfoModalShow;
    this.setState({ orderInfoModalShow });
  };

  /////////////////////////////////////
  //socket handele
  //handele socket.on event 
  componentDidMount() {
    console.log('componentDidMount');

    // this.socketRegisterUserForConnect('internet user')

    socket.on("connect", () => {
      this.state.users.forEach((user) => {
        if (user.self) {
          user.connected = true;
        }
      });
    });

    socket.on("disconnect", () => {
      this.state.users.forEach((user) => {
        if (user.self) {
          user.connected = false;
        }
      });
    });

    const initReactiveProperties = (user) => {
      user.connected = true;
      user.messages = [];
      user.hasNewMessages = false;
    };

    socket.on("users", (users) => {
      console.log("users", users);
      users.forEach((user) => {
        user.self = user.userID === socket.id;
        initReactiveProperties(user);
      });
      // put the current user first, and sort by username
      users.sort((a, b) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.username < b.username) return -1;
        return a.username > b.username ? 1 : 0;
      });
      this.setState({ users })
    });

    socket.on("user connected", (user) => {
      initReactiveProperties(user);
      const { users } = this.state
      users.push(user);
      this.setState({ users })
    });

    socket.on("user disconnected", (id) => {
      const { users } = this.state

      for (let i = 0; i < users.length; i++) {
        const user = this.state.users[i];
        if (user.userID === id) {
          user.connected = false;
          break;
        }
      }
      this.setState({ users })
    });

    socket.on("private message", ({ content, from }) => {
      const { users, messages } = this.state
      alert("private message \n"+content)
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.userID === from) {
          messages.push({ ...user, message: content })
          user.messages.push({
            content,
            fromSelf: false,
          });
          if (user !== this.state.selectedUser) {
            user.hasNewMessages = true;
          }
          break;
        }
      }
      this.setState({ messages, users })
    });

    socket.on("orders", (res) => this.handleGetOrderListener(res));
    //test socket
    socket.emit("test", 1);
    socket.on("test", () => {
      console.log('socket.emit test');
    });

  }
  //handele socket.off  
  componentWillUnmount() {
    socket.off("connect");
    socket.off("disconnect");
    socket.off("users");
    socket.off("user connected");
    socket.off("user disconnected");
    socket.off("private message");
  }

  onMessage(content, userID) {
    // debugger
    if (content && userID) {
      socket.emit("private message", {
        content,
        to: userID,
      });
      // this.state.selectedUser.messages.push({
      //   content,
      //   fromSelf: true,
      // });
    } else alert("select user")
  }
  onSelectUser = (user) => {
    console.log("onSelectUser user.username", user.username);
    const selectedUser = {
      ...user,
      hasNewMessages: false
    }
    this.setState({ selectedUser })
  }

  socketRegisterUserForConnect = (username, password, ptype) => {
    console.log("socket Register User username", username);
    this.setState({ usernameAlreadySelected: true })
    const type = ptype ? ptype : 1
    socket.auth = { username, password, type };
    socket.connect();
  }
  /////////////////////////////////////
  render() {
    // const { socket } = this.props;
    const liked = this.state.products.filter((i) => i.isFavorite);
    //listen from respond
    // if (socket)
    //   socket.on("getOrderState", (res) =>
    //     // this.handleGetOrderStateListener(res)
    //     console.log("getOrderState")
    //   );
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
          stateOrderText={this.state.stateOrderText}
          userData={this.state.userData}
          socket={socket}
        />
        <UsreState users={this.state.users} socket={socket} socketRegisterUserForConnect={this.socketRegisterUserForConnect} onMessage={this.onMessage} />
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
