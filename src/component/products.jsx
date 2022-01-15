import React from "react";
import OfferItem from "./offerItem";
// import "./col.css";
class Products extends React.Component {
  render() {
    const { addItemToShopList, products,addItemToFavorite } = this.props;

    return (
      // <div className="Products">
      //   <h1>Products</h1>
      // </div>
      <div className="Products">
        <div className="card-group">
          <div className="container">
            <div className="row">
              {products.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-lg-3 col-md-4 col-sm-6 col-xs-6"
                  >
                    <OfferItem
                      item={item}
                      addItemToShopList={addItemToShopList}
                      addItemToFavorite={addItemToFavorite}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
