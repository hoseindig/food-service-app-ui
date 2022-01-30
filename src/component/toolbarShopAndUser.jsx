import React, { Component } from "react";
import ShopListItem from "./shopListItem";
import OrderTacking from "./orderTracking";
import LikeListItem from "./likeListItem";
class LoginBoxInMainPage extends Component {
  state = {
    showShopListItem: false,
    showLikedListItem: false,
    showOrdersTracking: false,
  };
  showHideShopListItem = (p) => {
    if (p === 2) {
      this.setState({ showShopListItem: true, showOrdersTracking: true });
      return;
    }
    let showShopListItem = p ? p : false;
    this.setState({ showShopListItem, showOrdersTracking: false, showLikedListItem: false });
    if (!p) this.showHideLikeListItem();
    // console.log(showShopListItem);
  };
  showHideLikeListItem = (p) => {
    let showLikedListItem = p ? p : false;
    this.setState({ showLikedListItem });
    // console.log(showLikedListItem);
  };

  render() {
    const {
      liked,
      userData,
      shopList,
      stateOrderText,
      ordersTracking,
      confirmShopList,
      deleteItemToShopList,
      increaseDecreaseItemToShopList,
    } = this.props;
    let { showShopListItem, showLikedListItem } = this.state;

    return (
      <div
        className="LoginBox"
        onMouseLeave={() => this.showHideShopListItem()}
      >
        {showShopListItem === true && this.state.showOrdersTracking === false ? (
          <ShopListItem
            deleteItemToShopList={deleteItemToShopList}
            increaseDecreaseItemToShopList={increaseDecreaseItemToShopList}
            shopList={shopList}
            confirmShopList={confirmShopList}
            ordersTracking={ordersTracking}
            showOrdersTracking={this.state.showOrdersTracking}
          />
        ) : (
          ""
        )}
        {showShopListItem === true && this.state.showOrdersTracking === true ? (
          <OrderTacking
            deleteItemToShopList={deleteItemToShopList}
            increaseDecreaseItemToShopList={increaseDecreaseItemToShopList}
            shopList={shopList}
            confirmShopList={confirmShopList}
            ordersTracking={ordersTracking}
            showOrdersTracking={this.state.showOrdersTracking}
            stateOrderText={stateOrderText}
          />
        ) : (
          ""
        )}
        {showLikedListItem === true ? <LikeListItem likeList={liked} /> : ""}


        {/* user */}
        <i className="fa fa-user-o" aria-hidden="true" title={userData.name + " " + userData.familyName}></i>
        {/* <i className="fa fa-heart-o" aria-hidden="true"></i> */}
        {/* heart */}
        <div
          className=" fa fa-heart-o position-relative"
          onMouseEnter={() => this.showHideLikeListItem(true)}
        >
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {liked.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        {/* basket */}
        <div
          className=" fa fa-shopping-basket position-relative"
          onMouseEnter={() => this.showHideShopListItem(true)}
        >
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {shopList.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        {/* cutlery */}
        <div
          className=" fa fa-cutlery position-relative"
          onMouseEnter={() => this.showHideShopListItem(2)}
        >
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {ordersTracking.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
    );
  }
}

export default LoginBoxInMainPage;
