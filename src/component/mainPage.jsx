import SpecialOffer from "./specialOffer";
import TwoOffer from "./twoOffer";
import MainBox from "./mainBox";

const MainOage = () => {
  return (
    <div>
      <MainBox className="header" />
      <SpecialOffer />
      <TwoOffer />
    </div>
  );
};

export default MainOage;
