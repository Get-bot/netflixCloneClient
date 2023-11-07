import GridItem from "../GridItem/GridItem";
import SeparationLine from "../SeparationLine/SeparationLine";
import classes from "./GridItemsContainer.module.css";
import enjoyOnTv from "../../assets/img/tv.png";
import watchEverywhere from "../../assets/img/device-pile.png";
import kidsEn from "../../assets/img/netflixKids.png";
import kidsKr from "../../assets/img/netflixKids-kr.png";
import download from "../../assets/img/mobile-0819.jpg";
// @ts-ignore
import ontvVideo from "../../assets/video/tv-video.m4v";
// @ts-ignore
import deviceVideo from "../../assets/video/video-devices.m4v";
import React from "react";

const enItemsData = [
  {
    imgSrc: enjoyOnTv,
    alt: "enjoy_on_your_Tv",
    title: "Enjoy on your TV.",
    text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    videoSrc: ontvVideo,
    videoClassName: "tvVideoItem",
  },
  {
    imgSrc: watchEverywhere,
    alt: "watch_everywhere",
    title: "Watch everywhere.",
    text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
    videoSrc: deviceVideo,
    videoClassName: "deviceVideoItem",
  },
  {
    imgSrc: kidsEn,
    alt: "create_profiles_for_kids",
    title: "Create profiles for kids.",
    text: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
  },
  {
    imgSrc: download,
    alt: "watch_offline",
    title: "Download your shows to watch offline.",
    text: "Only available on ad-free plans.",
    isDownload: true,
  },
];

const krItemsData = [
  {
    imgSrc: enjoyOnTv,
    alt: "enjoy_on_your_Tv",
    title: "TV로 즐기세요",
    text: "스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.",
    videoSrc: ontvVideo,
    videoClassName: "tvVideoItem",
  },
  {
    imgSrc: watchEverywhere,
    alt: "watch_everywhere",
    title: "어디서나 자유롭게 시청하세요",
    text: "각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.",
    videoSrc: deviceVideo,
    videoClassName: "deviceVideoItem",
  },
  {
    imgSrc: kidsKr,
    alt: "create_profiles_for_kids",
    title: "어린이 전용 프로필을 만들어 보세요",
    text: "자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.",
  },
  {
    imgSrc: download,
    alt: "watch_offline",
    title: "즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요",
    text: "광고 없는 멤버십에서만 이용 가능합니다.",
    isDownload: true,
  },
]


type GridItemsContainerProps = {
  language?: string; // or you could use specific values like language?: "kr-en" | "another-language";
};

const GridItemsContainer: React.FC<GridItemsContainerProps> = (props: any) => {
  const itemsData = props.language === "kr-en" ? enItemsData : krItemsData;
  return (
    <>
      {itemsData.map((item, index) => {
        return (
          <div className={classes.gridItemsContainer} key={index}>
            <GridItem
              className=""
              key={item.title+index}
              alt={item.alt}
              src={item.imgSrc}
              title={item.title}
              text={item.text}
              videoSrc={item.videoSrc}
              videoClassName={item.videoClassName}
              isDownload={item.isDownload}
              textLocation={index % 2 === 0 ? "left" : "right"}
            />
            <SeparationLine/>
          </div>
        );
      })}
    </>
  );
};

export default GridItemsContainer;
