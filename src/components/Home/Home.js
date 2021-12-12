/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";
import {
  FullCarousel,
  ItemCarousel,
  RoadMapCarousel,
  NFTCarousel,
} from "./Carousel/Carousel";
import Box from "./Box/Box";
import Lootbox from "./Lootbox/Lootbox";
import { SetupWalletModal, TokenomicsModal } from "./Dialog/Dialog";
import CopyClipBoard from "./CopyClipBoard/CopyClipBoard";
import Footer from "./Footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../assets/logo.png";
import bannerLogo from "../../assets/banner-logo.png";

import lootbox1 from "../../assets/lootbox1.png";
import lootbox2 from "../../assets/lootbox2.png";
import lootbox3 from "../../assets/lootbox3.png";

import discord from "../../assets/discord.png";
import telegram from "../../assets/telegram.png";

import iceGundle from "../../assets/ice-gundle.png";
import flashBang from "../../assets/flashbang.png";
import grenade from "../../assets/grenade.png";
import emp from "../../assets/emp.png";
import vaporcrate from "../../assets/vaporcrate.png";
import signalSlicer from "../../assets/bosses/tvguyloopnoBG.gif";
import robsquid from "../../assets/bosses/pineapple squid2 nobg.gif";
import deadDice from "../../assets/bosses/diceguyidleNoBG.gif";
import blueBoxLg from "../../assets/blue-box-lg.png";
import yellowBoxLg from "../../assets/yellow-box-lg.png";
import purpleBoxLg from "../../assets/purple-box-lg.png";
import walletBlue from "../../assets/wallblue.gif";
import textbox from "../../assets/textbox.png";
import baseModel from "../../assets/base-model.gif";
import roadBar from "../../assets/road-bar.png";
import roadTri from "../../assets/road-tri.png";
import { Link } from "react-router-dom";
import Space1 from "../../assets/spaces/space1.png";

export default function Home(props) {
  return (
    <>
      <div className="grid justify-items-center banner-wrapper pb-24">
        <div className="flex flex-row-reverse w-11/12 md:w-9/12 justify-items-end gap-2 my-4 pb-16">
          <a
            href="https://t.me/vaporblitz"
            className="flex items-center text-center w-8 h-8 bg-purple-400 rounded-3xl"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="" className="p-1.5" src={telegram} />
          </a>
          <a
            href="https://discord.gg/fbf86kJn7H"
            className="flex items-center text-center w-8 h-8 bg-pink-300 rounded-3xl"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="" className="p-1.5" src={discord} />
          </a>
        </div>
        <img alt="" className="w-4/12 logo" src={bannerLogo} />
        <a
          className="bg-pink-300 hover:bg-pink-500 w-32 p-2 rounded-lg text-white mb-3 text-shadow custom-box-shadow hover:brightness-50"
          href="https://pancakeswap.finance/swap?outputCurrency=0x73f5a4808456f4927ee13cbe76b2b726136ce962"
          target="_blank"
          rel="noreferrer"
        >
          Buy $VPR on Pancakeswap
        </a>
        <Link
          className="bg-purple-300 hover:bg-purple-500 w-32 p-2 rounded-lg text-white text-shadow custom-box-shadow"
          to="/marketplace"
        >
          Marketplace
        </Link>
      </div>

      <Box title="What is Vaporblitz?" className="text-center bg-pink-800 pb-3">
        <p className="text-lg text-white text-opacity-50 w-11/12 mx-auto py-4">
          Vaporblitz is a PVP & P2E game where you fight against other players
          online for BNB or VPR. All in-game items are NFTS.
        </p>
        <p className="text-lg text-white text-opacity-50 w-11/12 mx-auto pb-6">
          Our goal is for Vaporblitz to be fun whilst also being able to make
          money in the process.
        </p>

        <div className="grid md:grid-cols-3 sm:gap-8 md:gap-10 lg:gap-24 w-10/12 mt-4 mx-auto">
          <Lootbox
            metamaskProvider={props.metamaskProvider}
            src={lootbox1}
            title="Basic Vaporcrate"
            desc="2 Weapon Skins, 1 Hat and 1 Accessory"
            price="0.45"
            count="1000"
            color="green"
          />
          <Lootbox
            metamaskProvider={props.metamaskProvider}
            src={lootbox2}
            title="Epic Vaporcrate"
            desc="5 Weapon Skins, 3 Hats and 3 Accessories"
            price="1.25"
            count="750"
            color="blue"
          />
          <Lootbox
            metamaskProvider={props.metamaskProvider}
            src={lootbox3}
            title="Legendary Vaporcrate"
            desc="7 Weapon Skins, 1 House, 4 Hats, 6 Accessories and 2 Game Beta Keys"
            price="2.25"
            count="300"
            color="yellow"
          />
        </div>
      </Box>

      <Box
        title="Collect NFT Items"
        sub="All Usable In-Game!"
        className="bg-purple-700 pb-5"
      >
        <div className="w-10/12 mx-auto py-2">
          <p className="text-sm uppercase text-white text-opacity-50 text-left pl-5 pb-1 smalltext">
            NFT weapon skins
          </p>
          <NFTCarousel weapon="true" />
        </div>

        <div className="w-10/12 mx-auto py-2">
          <p className="text-sm uppercase text-white text-opacity-50 text-left pl-5 pb-1 smalltext">
            NFT Accessories
          </p>
          <NFTCarousel />
        </div>
      </Box>

      <Box
        title="Extensive PVP System"
        sub="Different weapons, equipment and maps!"
        className="bg-pink-800 pb-5"
        id="pvp"
      >
        <div className="w-9/12 2xl:w-2/3 3xl:w-1/2 mx-auto mt-10">
          <div className="grid md:grid-cols-3 gap-5 md:gap-12 lg:gap-14 xl:gap-20">
            <div className="w-3/5 md:w-full mx-auto">
              <div className="flex justify-center items-center relative">
                <img alt="" src={blueBoxLg} className="w-full" />
                <img alt="" src={iceGundle} className="absolute h-3/5 mb-10" />
                <p className="absolute bottom-1/7 text-lg sm:text-xl md:text-2xl text-white">
                  Fun Weapons
                </p>
              </div>
              <p className="md:w-4/5 mx-auto mt-2 text-white text-opacity-50 md:text-lg">
                Over 10 Weapons with different abilities
              </p>
            </div>

            <div className="w-3/5 md:w-full mx-auto">
              <div className="flex justify-center items-center relative">
                <img alt="" src={yellowBoxLg} className="w-full" />
                <div className="flex items-center justify-center absolute h-full">
                  <img alt="" src={flashBang} className="h-3/6 mb-6" />
                  <img alt="" src={grenade} className="h-3/6 mb-6" />
                  <img alt="" src={emp} className="h-3/6 mb-6" />
                </div>
                <p className="absolute bottom-1/7 text-lg sm:text-xl md:text-2xl text-white">
                  Equipment
                </p>
              </div>
              <p className="md:w-4/5 mx-auto mt-2 text-white text-opacity-50 md:text-lg">
                Different Equipment which helps in combat
              </p>
            </div>

            <div className="w-3/5 md:w-full mx-auto">
              <div className="flex justify-center items-center relative">
                <img alt="" src={purpleBoxLg} className="w-full" />
                <img alt="" src={vaporcrate} className="absolute h-3/5 mb-10" />
                <p className="absolute bottom-1/7 text-lg sm:text-xl md:text-2xl text-white">
                  Airdrops
                </p>
              </div>
              <p className="md:w-4/5 mx-auto mt-2 text-white text-opacity-50 md:text-lg">
                Airdrops come in with different rare weapons
              </p>
            </div>
          </div>
        </div>
      </Box>

      <FullCarousel />

      <Box
        title="Fight Different Bosses for Crypto"
        id="pve"
        className="bg-purple-700 space-background"
        bimg={Space1}
      >
        <div className="grid md:grid-cols-3 crypto-bosses">
          <div className="inner-box">
            <img
              alt=""
              className="p-6 md:p-4 mx-auto tv-boss"
              src={signalSlicer}
            />
            <div className="flex items-center text-center h-24 md:h-40 mb-5 md:mb-0 ">
              <p className="text-white text-opacity-50 text-xl w-3/5 mx-auto">
                <span className="text-red">Signal Slicer</span> launches deadly
                signals at the player and is able to freeze them.
              </p>
            </div>
          </div>
          <div className="inner-box">
            <img alt="" className="pt-6 md:p-4 mx-auto" src={robsquid} />
            <div className="flex items-center text-center mx-auto h-24 md:h-40 mb-5 md:mb-0 ">
              <p className="text-white text-opacity-50 text-xl w-3/5 mx-auto">
                <span className="text-yellow">Robosquid</span> launches fruit
                based attacks, and summons fruit based enemies.
              </p>
            </div>
          </div>
          <div className="inner-box">
            <img
              alt=""
              className="pt-6 pb-2 md:p-4 mx-auto dead-dice"
              src={deadDice}
            />
            <div className="flex items-center text-center mx-auto h-24 md:h-40 mb-5 md:mb-0">
              <p className="text-white text-opacity-50 text-xl w-3/5 mx-auto">
                <span className="text-yellow-700">Dead Dice</span> launches
                multiple attacks which are all based on his slot machine.
              </p>
            </div>
          </div>
        </div>
      </Box>

      <Box title="" className="relative space-dress">
        <div className="relative mt-2 mx-2 md:mx-8 h-16 md:h-auto -mt-2 sm:mt-0">
          <img alt="" src={textbox} className="mx-auto h-full" />
          <p className="absolute transform -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 text-sm sm:text-base md:text-2xl lg:text-3xl text-white nft-text">
            Customize your Character with NFT Items
          </p>
        </div>
        <img
          alt=""
          className="charact-img  absolute transform -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2"
          src={baseModel}
        />
      </Box>

      <Box
        title="Own and Customize an NFT Home"
        sub="Buy a property, customize it and earn daily VPR from it."
        className="px-4 bg-pink-800"
      >
        <div className="md:w-4/6 xl:w-7/12 mx-auto">
          <img alt="" className="py-14 w-full" src={walletBlue} />
        </div>
      </Box>

      <Box
        title="Roadmap"
        sub="Our plans for the future"
        className="bg-purple-700"
      >
        <img alt="" className="h-3 w-full mt-6 px-3 md:px-6" src={roadBar} />
        <div className="grid grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <img
              alt=""
              key={i}
              className="relative z-10 mx-auto w-6 road-tri"
              src={roadTri}
            />
          ))}
        </div>
        <RoadMapCarousel />
      </Box>

      <Box
        title="Vaporblitz Team"
        sub="The projects core team"
        className="bg-pink-800"
      >
        <ItemCarousel />
      </Box>

      <Box
        title="Buy $VPR"
        sub="Buy the games main token on pancakeswap"
        className="text-center bg-purple-700 pb-8"
      >
        <a
          href="https://pancakeswap.finance/swap?outputCurrency=0x73f5a4808456f4927ee13cbe76b2b726136ce962"
          className="flex justify-center w-10/12 md:w-4/12 lg:w-3/12 mx-auto text-white custom-box-shadow rounded-md bg-pink-800 hover:bg-pink-900 py-1 mt-4"
          target="_blank"
          rel="noreferrer"
        >
          Buy on Pancakeswap
        </a>
        <p className="text-white py-4">Or</p>
        <CopyClipBoard />
        <SetupWalletModal />
        <TokenomicsModal />
      </Box>

      <Footer logo={logo} telegram={telegram} discord={discord} />
    </>
  );
}
