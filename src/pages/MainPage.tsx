import React from "react";
import Header from "../components/common/Header";
import Slider from "../components/Slider";
import Display from "../components/Display";
import Promotion from "../components/Promotion";
import Event from "../components/Event";
import News from "../components/News";
import Footer from "../components/Footer";

import "../styles/Main.scss";
import "../styles/Header.scss";
import "../styles/MainContent.scss";

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
        <News />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
