import SpecialOffer from "./specialOffer";
import TwoOffer from "./twoOffer";
import MainBox from "./mainBox";

const MainPage = ({ addItemToShopList }) => {
  return (
    <div>
      <MainBox className="header" />
      <SpecialOffer addItemToShopList={addItemToShopList} />
      <TwoOffer />
    </div>
  );
};

export default MainPage;
