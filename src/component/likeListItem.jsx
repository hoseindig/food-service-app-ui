const LikeListItem = ({ likeList }) => {
  return (
    <div className="shop-list-items">
      <ul className="list-group">
        {/* <span style={{"color":"white"}}>{shopList.length}</span> */}
        {likeList.map((item) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={item.id}
            >
              {item.title}
              {/* <span className="badge badge-primary badge-pill">
                {item.count}
              </span> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LikeListItem;
