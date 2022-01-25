import { Row, Col } from "react-bootstrap";
const OrderTacking = ({
  shopList,
  ordersTracking,
  confirmShopList,
  deleteItemToShopList,
  increaseDecreaseItemToShopList,
}) => {
  // const tootalBill = shopList.reduce(
  //   (n, { price, count }) => n + price * count,
  //   0
  // );
  console.log("ordersTracking", ordersTracking);
  return (
    <div className="orders-tracking-list-items">
      <ul className="list-group">
        {/* <span style={{"color":"white"}}>{shopList.length}</span> */}
        {ordersTracking.map((item) => {
          return (
            <li
              className="list-group-item   "
              key={item.id}
            >
              <ul>
                <li>
                  <h4>شماره سفارش : {item.issueTracking}</h4>
                </li>
              </ul>

              <ol>
                {item.data.shopList.map((shopItem) => {
                  return (
                    <li key={shopItem.id}>
                      <img src={shopItem.image} alt="" width="30" />
                      <span> {shopItem.title}</span>
                      <span className="badge badge-primary badge-pill">
                        {shopItem.count} x
                      </span>
                    </li>
                  );
                })}
              </ol>

              {/* 
                {item.price} تومان */}
              {/* <i
                  className="fa fa-plus"
                  aria-hidden="true"
                  onClick={() => increaseDecreaseItemToShopList(item, 1)}
                ></i>
                <i
                  className="fa fa-minus"
                  aria-hidden="true"
                  onClick={() => increaseDecreaseItemToShopList(item)}
                ></i>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={() => deleteItemToShopList(item)}
                ></i> */}
            </li>
          );
        })}
        {/* <li className="list-group-item d-flex justify-content-between align-items-center">
            جمع کل
            <span className="badge badge-primary badge-pill">
              {tootalBill} تومان
            </span>
          </li> */}
        {/* <li style={{ color: "white", backgroundColor: "green" }}>
            <button
              className="btn btn-succsess"
              style={{ color: "white", backgroundColor: "green" }}
              onClick={() => confirmShopList()}
            >
              تایید نهایی
            </button>
          </li> */}
      </ul>
    </div>
  );
};

export default OrderTacking;
