// import logo from './logo.svg';
import './App.scss';

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Navbar from "./navbar";
import QuickMenu from './quickMenu'; 
import MainBox from './mainBox';
import LoginBoxInMainPage from './loginBoxInMainPage';
import OrderByTell from './orderByTell';
function App() {
  return (
    <div className="App">
      <Navbar />
      <QuickMenu />
      <LoginBoxInMainPage/>
      <OrderByTell/>
      <MainBox className="header"/>
    </div>
  );
}

export default App;
