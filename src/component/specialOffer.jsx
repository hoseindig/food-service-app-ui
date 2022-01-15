import OfferItem from "./offerItem";
import OfferText from "./offertext";
const SpecialOffer = ({ addItemToShopList, products }) => {
  return (
    <div className="SpecialOffer">
      <OfferText />
      <div className="card-group">
        {products.map((item) => {
          if (item.isSpecialOffer)
            return (
              <OfferItem
                item={item}
                key={item.id}
                addItemToShopList={addItemToShopList}
              />
            );
            else return ''
        })}
      </div>
      <a href="#" className=" btn btn-secondary mt-5">
        مشاهده بیشتر
      </a>
    </div>
  );
};

export default SpecialOffer;
