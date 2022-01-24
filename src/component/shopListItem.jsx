const ShopListItem = ({
  shopList,
  confirmShopList,
  deleteItemToShopList,
  increaseDecreaseItemToShopList,
}) => {
  const tootalBill = shopList.reduce(
    (n, { price, count }) => n + price * count,
    0
  );
  return (
    <div className="shop-list-items">
      <ul className="list-group">
        {/* <span style={{"color":"white"}}>{shopList.length}</span> */}
        {shopList.map((item) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={item.id}
            >
              <img src={item.image} alt="" width="30" />
              {item.title}
              <span className="badge badge-primary badge-pill">
                {item.count} x
              </span>
              {item.price.toLocaleString()} تومان
              <i
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
              ></i>
            </li>
          );
        })}
        <li className="list-group-item d-flex justify-content-between align-items-center">
          جمع کل
          <span className="badge badge-primary badge-pill">
            {tootalBill.toLocaleString()} تومان
          </span>
        </li>
        <li style={{ color: "white", backgroundColor: "green" }}>
          <button
            className="btn btn-succsess"
            style={{ color: "white", backgroundColor: "green" }}
            onClick={() => confirmShopList()}
          >
            تایید نهایی
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ShopListItem;
