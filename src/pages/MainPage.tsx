import React from 'react'
import Header from '../components/common/Header'
import Slider from '../components/Slider'

import "../styles/Main.scss";
import "../styles/Header.scss";
import "../styles/MainContent.scss";

const MainPage:React.FC = () => {
  return (
    <>
      <Header />
      <Slider />
    </>
  )
}

export default MainPage