import React, { useState } from "react";
import "./Main.css";

// Components
import Header from "../../components/Header";
import DataView from "../../components/DataView";

const Main = () => {
  return (
    <div className="App p-grid p-dir-col">
      <Header />
      <div className="p-grid p-d-flex">
        <div className="p-d-none p-md-2 p-d-md-inline-flex"></div>
        <div className="App-body p-col-12 p-md-8  ">ausehuiasehui</div>
        <div className="p-d-none p-md-2 p-d-md-inline-flex"></div>
      </div>
    </div>
  );
};

export default Main;
