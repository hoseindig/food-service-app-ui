import React from "react";

const QuickMenu = () => {
  return (
    <React.Fragment>
      <ul className="quickMenu">
        <li>
          <a to=""> پیتزا</a>
        </li>
        <li>
          <a to="">همبرگر</a>
        </li>
        <li>
          <a to="">ساندویچ</a>
        </li>
        <li>
          <a to="">سالاد و سایر</a>
        </li>
        <li>
          <a to="">سیبزمنی تنوری</a>
        </li>
        <li>
          <a to="">نوشیدنی</a>
        </li>
        <li>
          <a to="">دسر</a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default QuickMenu;
