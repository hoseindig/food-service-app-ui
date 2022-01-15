import React, { Component } from "react";
import ShopListItem from "./shopListItem";
class LoginBoxInMainPage extends Component {
  state = {
    showShopListItem: false,
  };

  showHideShopListItem = (p) => {
    let showShopListItem = p ? p : false;
    this.setState({ showShopListItem });
    console.log(showShopListItem);
  };

  render() {
    const { shopList } = this.props;
    let { showShopListItem } = this.state;

    return (
      <div
        className="LoginBox"
        onMouseLeave={() => this.showHideShopListItem()}
      >
        {/* <button onClick={() => this.showHideShopListItem(1)}>testhandler {this.showShopListItem}</button> */}
        {showShopListItem === true ? <ShopListItem shopList={shopList} /> : ""}
        <i className="fa fa-user-o" aria-hidden="true"></i>
        {/* <i className="fa fa-heart-o" aria-hidden="true"></i> */}

        <div className=" fa fa-heart-o position-relative">
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            0<span className="visually-hidden">unread messages</span>
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
