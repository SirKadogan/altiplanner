import React, { useState } from "react";
import "./Main.css";

// Libraries

// Components
import Header from "../../components/Header";
import Padding from "../../components/Padding";
import Activity from "../../components/Activity";

const Main = () => {
  return (
    <div className="App p-grid p-dir-col">
      <Header />
      <div className="p-grid">
        <Padding />
        <div className="p-col-12 p-md-8 p-grid">
          <Activity />
          <Activity />
          <Activity />
        </div>
        <Padding />
      </div>
    </div>
  );
};

export default Main;
