import React from "react";
import { EventType } from "../model/types";

let eventData: EventType = {
  list: [
    {
      name: "3X3 농구",
      imgSrc: "3x3_basketball",
    },
    {
      name: "양궁",
      imgSrc: "archery",
    },
    {
      name: "기계체조",
      imgSrc: "artistic_gymnastics",
    },
    {
      name: "수중체조",
      imgSrc: "artistic_swimming",
    },
    {
      name: "육상",
      imgSrc: "athletics",
    },
    {
      name: "농구",
      imgSrc: "basketball",
    },
    {
      name: "배드민턴",
      imgSrc: "badminton",
    },
    {
      name: "비치발리볼",
      imgSrc: "beach_volleyball",
    },
    {
      name: "복싱",
      imgSrc: "boxing",
    },
    {
      name: "브레이킹",
      imgSrc: "breaking",
    },
    {
      name: "카누 스프린트",
      imgSrc: "canoe_sprint",
    },
    {
      name: "카누 슬라럼",
      imgSrc: "canoe_slalom",
    },
    {
      name: "사이클 BMX 프리스타일",
      imgSrc: "cycling_bmx_freestyle",
    },
    {
      name: "사이클 BMX 레이싱",
      imgSrc: "cycling_bmx_racing",
    },
    {
      name: "사이클 산악자전거",
      imgSrc: "cycling_mountain_bike",
    },
    {
      name: "사이클 도로",
      imgSrc: "cycling_road",
    },
    {
      name: "사이클 트랙",
      imgSrc: "cycling_track",
    },
    {
      name: "다이빙",
      imgSrc: "diving",
    },
    {
      name: "승마",
      imgSrc: "equestrian",
    },
    {
      name: "종합마술",
      imgSrc: "equestrian_eventing",
    },
    {
      name: "승마점프",
      imgSrc: "equestrian_jumping",
    },
    {
      name: "펜싱",
      imgSrc: "fencing",
    },
    {
      name: "축구",
      imgSrc: "football",
    },
    {
      name: "골프",
      imgSrc: "golf",
    },
    {
      name: "하키",
      imgSrc: "hockey",
    },
    {
      name: "핸드볼",
      imgSrc: "handball",
    },
    {
      name: "유도",
      imgSrc: "judo",
    },
    {
      name: "마라톤 수영",
      imgSrc: "marathon_swimming",
    },
    {
      name: "근대5종",
      imgSrc: "modern_pentathlon",
    },
    {
      name: "리듬체조",
      imgSrc: "rhythmic_gymnastics",
    },
    {
      name: "조정",
      imgSrc: "rowing",
    },
    {
      name: "7인제 럭비",
      imgSrc: "rugby_sevens",
    },
    {
      name: "요트",
      imgSrc: "sailing",
    },
    {
      name: "사격",
      imgSrc: "shooting",
    },
    {
      name: "스케이트보드",
      imgSrc: "skateboarding",
    },
    {
      name: "스포츠 클라이밍",
      imgSrc: "sport_climbing",
    },
    {
      name: "서핑",
      imgSrc: "surfing",
    },
    {
      name: "수영",
      imgSrc: "swimming",
    },
    {
      name: "탁구",
      imgSrc: "table_tennis",
    },
    {
      name: "태권도",
      imgSrc: "taekwondo",
    },
    {
      name: "테니스",
      imgSrc: "tennis",
    },
    {
      name: "트램폴린 체조",
      imgSrc: "trampoline_gymnastics",
    },
    {
      name: "트라이애슬론",
      imgSrc: "triathlon",
    },
    {
      name: "배구",
      imgSrc: "volleyball",
    },
    {
      name: "수구",
      imgSrc: "water_polo",
    },
    {
      name: "역도",
      imgSrc: "weightlifting",
    },
    {
      name: "레슬링",
      imgSrc: "wrestling",
    },
  ],
};

const Event: React.FC = () => {
  return (
    <section className="event-section cfixed">
      <h2 className="sec-tit">
        종목
        <span>EVENT</span>
      </h2>
      <ul className="event-list">
        {eventData.list.map((event, index) => (
          <li key={index}>
            <a href="#none">
              <div className="pictogram">
                <h3>{event.name}</h3>
                <img
                  src={`${process.env.PUBLIC_URL}/images/pictogram/${event.imgSrc}.jpg`}
                  alt={`pictogram-${event.imgSrc}-img`}
                  className="pictogram-img"
                />
                <div>DEFINITION / SCHEDULE</div>
              </div>
              <img
                src={`${process.env.PUBLIC_URL}/images/event/${event.imgSrc}.jpg`}
                alt={`event-${event.imgSrc}-img`}
                className="event-img"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Event;
