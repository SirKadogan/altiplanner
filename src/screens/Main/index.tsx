import React from "react";
import "./Main.css";

// Components
import Header from "../../components/Header";
import Activity from "../../components/Activity";
import WeekPicker from "../../components/WeekPicker";

// Styles
import GlobalStyles from '../../styles/global';

const Main = () => {
  return (
    <>
      <GlobalStyles />
      <div className="App p-grid p-dir-col">
        <Header />
        <div className="p-grid p-justify-center">
          <div className="p-col-12 p-md-8 p-grid p-justify-center">
            <WeekPicker />
          </div>
          <div className="p-col-12 p-md-8 p-grid">
            <Activity />
            <Activity />
            <Activity />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
