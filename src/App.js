// import logo from './logo.svg';

import "./App.scss";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";

import Main from "./main";
// import Products from "./component/products";
function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right"/>
      <Main />
    </div>
  );
}

export default App;
