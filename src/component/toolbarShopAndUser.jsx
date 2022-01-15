import React, { Component } from "react";
import ShopListItem from "./shopListItem";
import LikeListItem from "./likeListItem";
class LoginBoxInMainPage extends Component {
  state = {
    showShopListItem: false,
    showLikedListItem: false,
  };
  showHideShopListItem = (p) => {
    let showShopListItem = p ? p : false;
    this.setState({ showShopListItem });
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
      shopList,
      liked,
      deleteItemToShopList,
      increaseDecreaseItemToShopList,
    } = this.props;
    let { showShopListItem, showLikedListItem } = this.state;

    return (
      <div
        className="LoginBox"
        onMouseLeave={() => this.showHideShopListItem()}
      >
        {showShopListItem === true ? (
          <ShopListItem
            deleteItemToShopList={deleteItemToShopList}
            increaseDecreaseItemToShopList={increaseDecreaseItemToShopList}
            shopList={shopList}
          />
        ) : (
          ""
        )}
        {showLikedListItem === true ? <LikeListItem likeList={liked} /> : ""}
        <i className="fa fa-user-o" aria-hidden="true"></i>
        {/* <i className="fa fa-heart-o" aria-hidden="true"></i> */}

        <div
          className=" fa fa-heart-o position-relative"
          onMouseEnter={() => this.showHideLikeListItem(true)}
        >
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {liked.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>

        <div
          className=" fa fa-shopping-basket position-relative"
          onMouseEnter={() => this.showHideShopListItem(true)}
        >
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {shopList.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>

        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
    );
  }
}

export default LoginBoxInMainPage;
