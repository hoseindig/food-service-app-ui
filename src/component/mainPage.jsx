import SpecialOffer from "./specialOffer";
import TwoOffer from "./twoOffer";
import MainBox from "./mainBox";

const MainPage = ({ addItemToShopList }) => {
  // function testhandler() {
  //   debugger
  //   console.log("testhandler");
  // }
  return (
    <div>
      {/* <button onClick={() => testhandler}>testhandler</button> */}
      <MainBox className="header" />
      <SpecialOffer addItemToShopList={addItemToShopList} />
      <TwoOffer />
    </div>
  );
};

export default MainPage;
