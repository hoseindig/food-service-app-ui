const ShopListItem = ({ shopList }) => {
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
            </li>
          );
        })}
        <li className="list-group-item d-flex justify-content-between align-items-center">
          جمع کل
          <span className="badge badge-primary badge-pill">
            {tootalBill.toLocaleString()} تومان
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ShopListItem;
