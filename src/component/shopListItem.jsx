const ShopListItem = ({ shopList }) => {
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
              {item.title}
              <span className="badge badge-primary badge-pill">
                {item.count}
              </span>
            </li>
          );
        })}

        {/* <li className="list-group-item d-flex justify-content-between align-items-center">
          Cras justo odio
          <span className="badge badge-primary badge-pill">14</span>
        </li> */}
      </ul>
    </div>
  );
};

export default ShopListItem;
