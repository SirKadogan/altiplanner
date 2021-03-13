import React from "react";
import "./Main.css";

// Components
import Header from "../../components/Header";
import Activity from "../../components/Activity";

const Main = () => {
  return (
    <div className="App p-grid p-dir-col">
      <Header />
      <div className="p-grid  p-justify-center">
        <div className="p-col-12 p-md-8 p-grid">
          <Activity />
          <Activity />
          <Activity />
        </div>
      </div>
    </div>
  );
};

export default Main;
