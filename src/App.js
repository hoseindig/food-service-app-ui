// import logo from './logo.svg';
import './App.scss';

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Navbar from "./component/navbar";
import QuickMenu from './component/quickMenu'; 
import MainBox from './component/mainBox';
import LoginBoxInMainPage from './component/loginBoxInMainPage';
import OrderByTell from './component/orderByTell';
import SpecialOffer from './component/specialOffer';
import TwoOffer from './component/twoOffer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <QuickMenu />
      <LoginBoxInMainPage/>
      <OrderByTell/>
      <MainBox className="header"/>
      <SpecialOffer/>
      <TwoOffer/>
    </div>
  );
}

export default App;
