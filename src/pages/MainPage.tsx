import React from "react";
import Header from "../components/common/Header";
import Slider from "../components/Slider";
import Display from "../components/Display";

import "../styles/Main.scss";
import "../styles/Header.scss";
import "../styles/MainContent.scss";
import Promotion from "../components/Promotion";

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Slider />
      <div className="content">
        <Display />
        <Promotion />
      </div>
    </>
  );
};

export default MainPage;
