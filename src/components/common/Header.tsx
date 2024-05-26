import React from "react";
import "../../styles/Main.scss";
import "../../styles/Header.scss";
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
  return (
    <header className="header cfixed">
      <h1 className="logo">
        <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" />
        <a href="#none">Paris 2024</a>
      </h1>
      <div></div>
      <nav>
        <ul className="gnb">
          {gnbData.list.map((item, index) => (
            <li key={index}>
              <a href="#none">{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="menu-toggle-btn">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </header>
  );
};

export default Header;
