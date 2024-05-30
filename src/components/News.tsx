import React from "react";
import { NewsType } from "../model/types";

let NewsData: NewsType = {
  list: [
    {
      no: "01",
      dateTime: "2024-05-30",
      dateTime2: "MAY 30, 2024",
      title: "프랑스, 100년 만의 올림픽으로 ‘빛의 도시’ 영광 노려",
    },
    {
      no: "02",
      dateTime: "2024-01-22",
      dateTime2: "JAN 22, 2024",
      title: "7개월 남은 파리 올림픽, 주목해 볼 종목과 선수",
    },
    {
      no: "03",
      dateTime: "2023-11-23",
      dateTime2: "NOV 23, 2023",
      title: "프랑스 장인들, 파리 올림픽 성화봉 제작",
    },
  ],
};

const News: React.FC = () => {
  return (
    <section className="news-section">
      <div className="container">
        <h2 className="sec-tit">NEWS</h2>
        <ul className="news-list">
          {NewsData.list.map((news, index) => (
            <li key={index}>
              <a href="#none">
                <img
                  src={`${process.env.PUBLIC_URL}/images/news/news${news.no}.jpg`}
                  alt={`news${news.no}-img`}
                />
              </a>
              <time dateTime={news.dateTime}>{news.dateTime2}</time>
              <a href="#none">
                <h3>{news.title}...</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default News;
