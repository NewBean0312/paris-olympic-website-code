import React from "react";
import "../styles/Main.scss";
import "../styles/MainContent.scss";
import { PromotionType } from "../model/types";

let promotionData: PromotionType = {
  list: [
    {
      imgSrc: "france.png",
      name: "파리",
      content:
        "2024년 프랑스 파리에서 개최 예정인 제33회 하계 올림픽입니다. 1924 파리 올림픽 이후, 정확히 100년 만에 파리에서 개최되는 하계 올림픽입니다.",
    },
    {
      imgSrc: "emblem.svg",
      name: "엠블럼",
      content:
        "파리 아르데코 양식으로부터 영감받아 프랑스 의인화 상징 마리안을 표현하였습니다. 역사상 처음으로 올림픽과 패럴림픽 로고가 같습니다",
    },
    {
      imgSrc: "mascot.webp",
      name: "마스코트",
      content:
        "2022년 11월 14일에 처음으로 공개된 공식 마스코트 'Phryge'(프리주)입니다. 모티브는 프리기아 캡에서 얻었습니다.",
    },
    {
      imgSrc: "medal.webp",
      name: "메달",
      content:
        "올림픽 메달 트리온포의 오른쪽에는 에펠탑이 새겨져 있고, 에펠 탑에서 나온 강철 18g이 포함되어 있습니다.",
    },
  ],
};

const Promotion: React.FC = () => {
  return (
    <section className="promotion-section">
      <div className="container">
        <ul className="promo-list">
          {promotionData.list.map((data, index) => (
            <li key={index}>
              <a href="#none">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${data.imgSrc}`}
                  alt=""
                />
              </a>
              <h3>{data.name}</h3>
              <p>{data.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Promotion;
