// import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Navbar from "./navbar";
import QuickMenu from './quickMenu'; 
import MainBox from './mainBox';
function App() {
  return (
    <div className="App">
      <Navbar />
      <QuickMenu />
      <MainBox/>
    </div>
  );
}

export default App;
