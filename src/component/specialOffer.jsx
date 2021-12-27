const SpecialOffer = () => {
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
      <h3>محصولات ما</h3>
      <h1 className="text-danger">برگرهای ویژه</h1>
      <p>
        برای اولین بار در سال ۱۳۸۷ در شهر تهران ، منطقه پاسداران افتتاح گردید .
        هدف این مجموعه از ابتدا ارائه بهترین مواد غذایی با رعایت کلیه نکات
        بهداشتی همچنین مناسبترین قیمت برای مشتریان وفادار خود بوده ، هم اکنون پس
        از سالها حضور موفق این مجموعه در عرصه فروشگاههای مواد غذایی هیچگونه
        تغییری در کیفیت غذا ایجاد نشده بلکه با استفاده از بروزترین دستگاههای
        مدرن رستورانی بمراتب نسبت به قبل بهبود یافته .{" "}
      </p>
      <div className="card-group">
        {bergers.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img src={item.image} alt="" />

              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.info}</p>
              </div>
              <div className="card-footer">
                {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                <a href="#" className="btn btn-primary">
                  قیمت {item.price} تومان
                </a>
              </div>
            </div>
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
