import React, { useState } from "react";
import { GnbType } from "../../model/types";

// Gnb list data
let gnbData: GnbType = {
  list: [
    { name: "HOME" },
    { name: "NEWS" },
    { name: "PLAYER" },
    { name: "EVENT" },
    { name: "CONTACT US" },
  ],
};

const Header: React.FC = () => {
  const [isGnbVisible, setIsGnbVisible] = useState(false);

  const toggleGnbVisibility = () => {
    setIsGnbVisible((prevState) => !prevState);
  }

  return (
    <header className="header cfixed">
      <h1 className="logo">
        <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" />
        <a href="#none">Paris 2024</a>
      </h1>
      <div></div>
      <nav>
        <ul className={`gnb ${isGnbVisible ? "visible" : "hidden"}`}>
          {gnbData.list.map((item, index) => (
            <li key={index}>
              <a href="#none">{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="menu-toggle-btn" onClick={toggleGnbVisibility}>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </header>
  );
};

export default Header;
