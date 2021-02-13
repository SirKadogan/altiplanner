import React, { useState } from "react";
import "./Main.css";

// Components
import Header from "../../components/Header";
import Padding from "../../components/Padding";

const Main = () => {
  return (
    <div className="App p-grid p-dir-col">
      <Header />
      <div className="p-grid p-d-flex">
        <Padding />
        <div className="App-body p-col-12 p-md-8"></div>
        <Padding />
      </div>
    </div>
  );
};

export default Main;
