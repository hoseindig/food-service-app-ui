const LoginBoxInMainPage = () => {
  return (
    <div className="LoginBox">
      <i className="fa fa-user-o" aria-hidden="true"></i>
      {/* <i className="fa fa-heart-o" aria-hidden="true"></i> */}

      <div className=" fa fa-heart-o position-relative">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0<span className="visually-hidden">unread messages</span>
        </span>
      </div>

      <div className=" fa fa-shopping-basket position-relative">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0<span className="visually-hidden">unread messages</span>
        </span>
      </div>

      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
};

export default LoginBoxInMainPage;
