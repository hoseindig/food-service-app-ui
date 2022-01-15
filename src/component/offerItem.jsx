const OfferItem = ({ item, addItemToShopList, addItemToFavorite }) => {
  const cssClass = item.isFavorite
    ? "like ms-4 fa fa-heart "
    : "like ms-4 fa fa-heart-o ";

  return (
    <div className="card" key={item.id}>
      <img src={item.image} alt="" />

      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.info}</p>
      </div>
      <div className="card-footer">
        {item.count > 0 ? <span className="ms-2"> x {item.count}</span> : ""}
        {/* <small class="text-muted">Last updated 3 mins ago</small> */}
        <i
          className={cssClass}
          aria-hidden="true"
          onClick={() => addItemToFavorite(item)}
        ></i>
        <button
          onClick={() => addItemToShopList(item)}
          className="btn btn-primary"
        >
          قیمت {item.price.toLocaleString()} تومان
        </button>
      </div>
    </div>
  );
};

export default OfferItem;
