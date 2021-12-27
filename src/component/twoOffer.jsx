const TwoOffer = () => {
  const offer = [
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
  ];
  return (
    <div className="TwoOffer">
      <h1>
        شما لازم نیست یک طرف را انتخاب کنید <span>*</span>
      </h1>

      <div className="offer-box">
        <div>
          <img src="./images/spicy.png" alt="" />
        </div>

        <div className="shap" style={{backgroundImage: "url(./images/shap.png)"}}><span>یا</span> </div>
        <div>
          <img src="./images/spicy.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TwoOffer;
