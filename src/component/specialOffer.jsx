import OfferItem from "./offerItem";
import OfferText from "./offertext";
const SpecialOffer = ({ addItemToShopList }) => {
  const bergers = [
    {
      id: 1,
      title: "مانستر   ",
      info: "دوتا همبرگر دستی حرفه ای با پیاز کاراملی و پنیر موزارلا و یک سس خاص",
      price: "99,900",
      image: "images/bergers/monster.jpg",
    },
    {
      id: 2,
      title: "مانستر پپر  ",
      info: "دوتا همبرگر دستی حرفه ای با پپرونی و سیب زمینی سرخ شده و پنیر موزارلا و یک سس خاص",
      price: "119,900",
      image: "./images/bergers/monster-peper.jpg",
    },
    {
      id: 3,
      title: "مانستر چیزکراف      ",
      info: "دوتا همبرگر دستی حرفه ای با یک کراکف سرخ شده و پنیر موزارلا و یک سس خاص",
      price: "139,900",
      image: "./images/bergers/monster-cheese keraf.jpg",
    },
    {
      id: 4,
      title: "مانستر کینگ  ",
      info: "سه تا همبرگر دستی حرفه ای با کراکف و پپرونی و پنیر موزارلا و یک سس خاص      ",
      price: "169,900",
      image: "./images/bergers/monster-king.jpg",
    },
  ];
  return (
    <div className="SpecialOffer">
      <OfferText />
      <div className="card-group">
        {bergers.map((item) => {
          return (
            <OfferItem
              item={item}
              key={item.id}
              addItemToShopList={addItemToShopList}
            />
          );
        })}
      </div>
      <a href="#" className=" btn btn-secondary mt-5">
        مشاهده بیشتر
      </a>
    </div>
  );
};

export default SpecialOffer;
