// import logo from './logo.svg';

import "./App.scss";
import { ToastContainer } from "react-toastify";
import io from "socket.io-client";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";

import Main from "./main";
// import Products from "./component/products";
function App() {
  //--------------- socket ---------------//
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:8000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  //--------------- socket ---------------//
  // setTimeout(() => {
  //   if (socket) socket.emit("getOrderState"); 
  // }, 1000);
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      {socket ? "" : <h1>Not Connected</h1>}
      <Main socket={socket}/>
    </div>
  );
}
  
export default App;
