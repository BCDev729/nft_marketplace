/* eslint-disable no-unused-vars */
import Slider from "react-slick";
import firstCarousel from "../../../assets/carousel1.png";
import firCeo from "../../../assets/ceo-1.png";
import secCeo from "../../../assets/ceo-2.png";
import leadArt from "../../../assets/lead-art.png";
import leadGame from "../../../assets/lead-game.png";
import stefan from "../../../assets/stefan.png";
import tecsas from "../../../assets/tecsas.png";

import wp1 from "../../../assets/nft_weapons/1.png";
import wp2 from "../../../assets/nft_weapons/2.png";
import wp3 from "../../../assets/nft_weapons/3.png";
import wp4 from "../../../assets/nft_weapons/4.png";
import wp5 from "../../../assets/nft_weapons/5.png";
import wp9 from "../../../assets/nft_weapons/9.png";
import wp10 from "../../../assets/nft_weapons/10.png";
import wp11 from "../../../assets/nft_weapons/11.png";
import wp12 from "../../../assets/nft_weapons/12.png";
import wp13 from "../../../assets/nft_weapons/13.png";
import wp14 from "../../../assets/nft_weapons/14.png";
import wp18 from "../../../assets/nft_weapons/18.png";
import wp19 from "../../../assets/nft_weapons/19.png";
import wp20 from "../../../assets/nft_weapons/20.png";
import wp21 from "../../../assets/nft_weapons/21.png";
import wp22 from "../../../assets/nft_weapons/22.png";
import wp23 from "../../../assets/nft_weapons/23.png";
import wp24 from "../../../assets/nft_weapons/24.png";
import wp25 from "../../../assets/nft_weapons/25.png";
import wp26 from "../../../assets/nft_weapons/26.png";
import wp27 from "../../../assets/nft_weapons/27.png";
import wp28 from "../../../assets/nft_weapons/28.png";
import wp33 from "../../../assets/nft_weapons/33.png";
import wp34 from "../../../assets/nft_weapons/34.png";
import wp35 from "../../../assets/nft_weapons/35.png";
import wp36 from "../../../assets/nft_weapons/36.png";
import wp37 from "../../../assets/nft_weapons/37.png";
import wp38 from "../../../assets/nft_weapons/38.png";
import wp39 from "../../../assets/nft_weapons/39.png";
import wp40 from "../../../assets/nft_weapons/40.png";
import wp41 from "../../../assets/nft_weapons/41.png";
import wp42 from "../../../assets/nft_weapons/42.png";
import wp43 from "../../../assets/nft_weapons/43.png";

import hat1 from "../../../assets/hats/1.png";
import hat2 from "../../../assets/hats/2.png";
import hat3 from "../../../assets/hats/3.png";
import hat4 from "../../../assets/hats/4.png";
import hat5 from "../../../assets/hats/5.png";
import hat6 from "../../../assets/hats/6.png";
import hat7 from "../../../assets/hats/7.png";
import hat8 from "../../../assets/hats/8.png";
import hat9 from "../../../assets/hats/9.png";
import hat10 from "../../../assets/hats/10.png";
import hat11 from "../../../assets/hats/11.png";
import hat12 from "../../../assets/hats/12.png";
import hat13 from "../../../assets/hats/13.png";
import hat14 from "../../../assets/hats/14.png";
import hat15 from "../../../assets/hats/15.png";
import hat16 from "../../../assets/hats/16.png";
import hat17 from "../../../assets/hats/17.png";
import hat18 from "../../../assets/hats/18.png";
import hat19 from "../../../assets/hats/19.png";
import hat20 from "../../../assets/hats/20.png";
import hat21 from "../../../assets/hats/21.png";
import hat22 from "../../../assets/hats/22.png";
import hat23 from "../../../assets/hats/23.png";
import hat24 from "../../../assets/hats/24.png";
import hat25 from "../../../assets/hats/25.png";
import hat26 from "../../../assets/hats/26.png";
import hat27 from "../../../assets/hats/27.png";

import blueBox from "../../../assets/blue-box.png";
import purpleBox from "../../../assets/purple-box.png";

import Map1 from "../../../assets/maps/1.png";
import Map2 from "../../../assets/maps/2.png";
import Map3 from "../../../assets/maps/3.png";
import Map4 from "../../../assets/maps/4.png";

function NextArrow(props) {
  const { className, style, onClick, type } = props;
  return (
    <>
      {type ? (
        <div
          className={className}
          style={{ ...style, right: "-10px" }}
          onClick={onClick}
        />
      ) : (
        <div
          className={className}
          style={{ ...style, right: "5px" }}
          onClick={onClick}
        />
      )}
    </>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export function FullCarousel() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const backgrounds = [Map1, Map2, Map3, Map4];

  return (
    <Slider {...settings}>
      {backgrounds.map((bg, index) => (
        <img key={index} src={bg} alt="" className="w-full" />
      ))}
    </Slider>
  );
}

function ItemContent(props) {
  return (
    <div className="px-6 py-3">
      <div className="custom-box-shadow pb-2">
        <img
          className="px-4 pt-3 pb-1 md:pt-5 md:pb-3"
          src={props.src}
          alt=""
        />
        <p className="text-white">{props.name}</p>
        <p className="text-white text-opacity-50">{props.role}</p>
      </div>
    </div>
  );
}

export function ItemCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    centerPadding: "80px",
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    nextArrow: <NextArrow type="true" />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="pl-2 pr-4 pt-4 pb-8">
      <Slider {...settings}>
        <ItemContent src={firCeo} name="Tim" role="CEO" />
        <ItemContent src={secCeo} name="Jayce" role="CEO" />
        <ItemContent src={leadArt} name="William" role="Pixel artist" />
        <ItemContent src={leadGame} name="Jurian" role="Lead Game Developer" />
        <ItemContent src={tecsas} name="Tecsas" role="Pixel Artist" />
        <ItemContent src={stefan} name="Stefan" role="Composer" />
      </Slider>
    </div>
  );
}

const roadMap = [
  {
    date: "DEC 2021",
    detail: [
      { name: "Game Release" },
      { name: "Marketing" },
      { name: "Giveaways" },
      { name: "Lootboxes" },
    ],
  },
  {
    date: "Q1 2022",
    detail: [
      { name: "PVE Release" },
      { name: "Youtuber Shoutouts" },
      { name: "Rewards Pool" },
      { name: "More Token Support" },
    ],
  },
  {
    date: "Q2 2022",
    detail: [
      { name: "Minigames" },
      { name: "Team Blitz" },
      { name: "More Bosses" },
      { name: "Mobile Version" },
    ],
  },
  {
    date: "Q3 2022",
    detail: [
      { name: "Level Creator" },
      { name: "PVE - Coop" },
      { name: "TBA" },
    ],
  },
  {
    date: "Q4 2022",
    detail: [{ name: "TBA" }],
  },
];

function RoadMapItem(props) {
  return (
    <div className="text-center text-white">
      <div className="w-10/12 mx-auto mt-2 bg-pink-800 rounded custom-box-shadow p-1 md:p-2 mb-3 md:text-lg">
        {props.date}
      </div>
      {props.detail.map((item) => (
        <p key={item.name} className="text-sm md:text-base">
          {item.name}
        </p>
      ))}
    </div>
  );
}

export function RoadMapCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="pb-4">
      <Slider {...settings}>
        {roadMap.map((item) => (
          <RoadMapItem key={item.date} date={item.date} detail={item.detail} />
        ))}
      </Slider>
    </div>
  );
}

const purpleWrap = {
  backgroundImage: "url(" + purpleBox + ")",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const blueWrap = {
  backgroundImage: "url(" + blueBox + ")",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export function NFTCarousel(props) {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 0,
    slidesToShow: 7,
    draggable: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 2800,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      {props.weapon ? (
        <div className="">
          <Slider {...settings}>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 lg:py-12 xl:py-16 2xl:py-18"
                style={purpleWrap}
              >
                <img
                  src={wp1}
                  className="h-7 sm:h-9 lg:h-10 xl:h-12 2xl:h-14 mx-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 lg:py-12 xl:py-16 2xl:py-18"
                style={purpleWrap}
              >
                <img
                  alt=""
                  src={wp2}
                  className="h-7 sm:h-9 lg:h-10 xl:h-12 2xl:h-14 mx-auto"
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 lg:py-12 xl:py-16 2xl:py-18"
                style={purpleWrap}
              >
                <img
                  alt=""
                  src={wp3}
                  className="h-7 sm:h-9 lg:h-10 xl:h-12 2xl:h-14 mx-auto"
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 lg:py-12 xl:py-16 2xl:py-18"
                style={purpleWrap}
              >
                <img
                  alt=""
                  src={wp4}
                  className="h-7 sm:h-9 lg:h-10 xl:h-12 2xl:h-14 mx-auto"
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 lg:py-12 xl:py-16 2xl:py-18"
                style={purpleWrap}
              >
                <img
                  alt=""
                  src={wp5}
                  className="h-7 sm:h-9 lg:h-10 xl:h-12 2xl:h-14 mx-auto"
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 lg:py-12 xl:py-16 2xl:py-18"
                style={purpleWrap}
              >
                <img
                  alt=""
                  src={wp9}
                  className="h-7 sm:h-9 lg:h-10 xl:h-12 2xl:h-14 mx-auto"
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 lg:py-12 xl:py-16 2xl:py-18"
                style={purpleWrap}
              >
                <img
                  alt=""
                  src={wp10}
                  className="h-7 sm:h-9 lg:h-10 xl:h-12 2xl:h-14 mx-auto"
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 lg:py-12 xl:py-16 2xl:py-18"
                style={purpleWrap}
              >
                <img
                  alt=""
                  src={wp11}
                  className="h-7 sm:h-9 lg:h-10 xl:h-12 2xl:h-14 mx-auto"
                />
              </div>
            </div>
          </Slider>
        </div>
      ) : (
        <div className="">
          <Slider {...settings}>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 md:py-10 lg:py-12 xl:py-14 2xl:py-18"
                style={blueWrap}
              >
                <img
                  alt=""
                  src={hat1}
                  className="h-9 sm:h-12 lg:h-16 xl:h-18 2xl:h-20 mx-auto"
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 md:py-10 lg:py-12 xl:py-14 2xl:py-18"
                style={blueWrap}
              >
                <img
                  alt=""
                  src={hat2}
                  className="h-9 sm:h-12 lg:h-16 xl:h-18 2xl:h-20 mx-auto"
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 md:py-10 lg:py-12 xl:py-14 2xl:py-18"
                style={blueWrap}
              >
                <img
                  alt=""
                  src={hat3}
                  className="h-9 sm:h-12 lg:h-16 xl:h-18 2xl:h-20 mx-auto"
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 md:py-10 lg:py-12 xl:py-14 2xl:py-18"
                style={blueWrap}
              >
                <img
                  alt=""
                  src={hat4}
                  className="h-9 sm:h-12 lg:h-16 xl:h-18 2xl:h-20 mx-auto"
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 md:py-10 lg:py-12 xl:py-14 2xl:py-18"
                style={blueWrap}
              >
                <img
                  alt=""
                  src={hat5}
                  className="h-9 sm:h-12 lg:h-16 xl:h-18 2xl:h-20 mx-auto"
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 md:py-10 lg:py-12 xl:py-14 2xl:py-18"
                style={blueWrap}
              >
                <img
                  alt=""
                  src={hat6}
                  className="h-9 sm:h-12 lg:h-16 xl:h-18 2xl:h-20 mx-auto"
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 md:py-10 lg:py-12 xl:py-14 2xl:py-18"
                style={blueWrap}
              >
                <img
                  alt=""
                  src={hat7}
                  className="h-9 sm:h-12 lg:h-16 xl:h-18 2xl:h-20 mx-auto"
                />
              </div>
            </div>
            <div className="relative flex justify-center items-center px-2 md:px-4">
              <div
                className="py-9 md:py-10 lg:py-12 xl:py-14 2xl:py-18"
                style={blueWrap}
              >
                <img
                  alt=""
                  src={hat8}
                  className="h-9 sm:h-12 lg:h-16 xl:h-18 2xl:h-20 mx-auto"
                />
              </div>
            </div>
          </Slider>
        </div>
      )}
    </>
  );
}
