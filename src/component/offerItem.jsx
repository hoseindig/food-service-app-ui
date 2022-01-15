const OfferItem = ({ item, addItemToShopList }) => {
  return (
    <div className="card" key={item.id}>
      <img src={item.image} alt="" />

      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.info}</p>
      </div>
      <div className="card-footer">
        {/* <small class="text-muted">Last updated 3 mins ago</small> */}
        <button
          onClick={() => addItemToShopList(item)}
          className="btn btn-primary"
        >
          قیمت {item.price} تومان
        </button>
      </div>
    </div>
  );
};

export default OfferItem;
