// import logo from './logo.svg';
import { Switch,Route } from "react-router-dom";
import Products from "./component/products";
import "./App.scss";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Navbar from "./component/navbar";
import QuickMenu from "./component/quickMenu";
import LoginBoxInMainPage from "./component/loginBoxInMainPage";
import OrderByTell from "./component/orderByTell";
import MainPage from "./component/mainPage";
// import Products from "./component/products";
function App() {
  return (
    <div className="App">
      <Navbar />
      <QuickMenu />
      <OrderByTell />
      <LoginBoxInMainPage />
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/" exact component={MainPage} />

      </Switch>
    </div>
  );
}

export default App;
