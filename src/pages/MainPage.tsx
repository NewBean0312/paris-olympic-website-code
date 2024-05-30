import React from "react";
import Header from "../components/common/Header";
import Slider from "../components/Slider";
import Display from "../components/Display";

import "../styles/Main.scss";
import "../styles/Header.scss";
import "../styles/MainContent.scss";
import Promotion from "../components/Promotion";
import Event from "../components/Event";

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Slider />
      <div className="content">
        <Display />
        <Promotion />
        <hr className="divider" />
        <Event />
      </div>
    </>
  );
};

export default MainPage;
