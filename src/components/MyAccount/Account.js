import "./account.css";
import { Link } from "react-router-dom";

import Pagination from "@mui/material/Pagination";
import User from "./User";
import Card from "./Card";
const linkList = [
  {
    name: "All",
    link: "/",
  },
  {
    name: "skins",
    link: "/skins",
  },
  {
    name: "properties",
    link: "/properties",
  },
  {
    name: "Characters",
    link: "/characters",
  },
];

const cardData = [
  {
    name: "Bluedrift Rifle",
    tagClass: "mythical-b",
    tags: [
      { class: "mythical", content: "Mythical" },
      { class: "loot-box ", content: "Lootbox Item" },
    ],
  },
  {
    name: "Bluedrift Rifle",
    tagClass: "legendary-b",
    tags: [
      { class: "legendary", content: "Legendary" },
      { class: "loot-box ", content: "Lootbox Item" },
    ],
  },
  {
    name: "Bluedrift Rifle",
    tagClass: "epic-b",
    tags: [{ class: "epic", content: "Epic" }],
  },
  {
    name: "Bluedrift Rifle",
    tagClass: "rare-b",
    tags: [{ class: "rare", content: "Rare" }],
  },
  {
    name: "Bluedrift Rifle",
    tagClass: "uncommon-b",
    tags: [{ class: "uncommon", content: "Uncommon" }],
  },
  {
    name: "Bluedrift Rifle",
    tagClass: "common-b",
    tags: [{ class: "common", content: "common" }],
  },
];

const Account = () => {
  return (
    <div className=" text-white text-left bg-black-500 pb-20">
      <div className=" bg-black-700 pt-20 ">
        <div className="container custom-container">
          <User />
          <ul className="flex items-center mt-6 overflow-auto">
            {linkList.map((v, i) => (
              <li key={i}>
                <Link
                  to={`/account${v.link}`}
                  className="px-8 py-4 inline-block text-gray text-lg capitalize"
                >
                  {v.name}
                </Link>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="container custom-container">
          <h3 className="text-gray border-b-2 border-gray pt-10 pb-2 ">
            Most Valuable Assets
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  gap-y-8 md:grid-cols-3 py-6 md:gap-x-10 lg:gap-x-20 md:gap-y-10">
            {cardData.map((item, id) => (
              <Card item={item} key={id} />
            ))}
          </div>
          <div className="pb-14">
            <Pagination count={10} />
          </div>
          <div className="border-b border-gray pb-1 text-gray flex justify-between">
            <p className="text-xl">on-Sale Items</p>
            <div className="flex items-center">
              <p>Sort by</p>
              <div className="ml-2 py-1 px-4 bg-gray-700 rounded-lg cursor-pointer  flex items-center">
                <p className="mr-2">Newest</p>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div className="py-40 text-center">
            <p>No On-Sale Items Yet.</p>
          </div>
          <div>
            <p className="border-b border-gray text-gray pb-1">User Details</p>
            <div className=" flex-col sm:flex-row flex items-center mt-4">
              <div className="p-3 px-10 rounded-xl bg-black-700 text-center sm:mr-4">
                <p className="text-gray">Items Owned</p>
                <p>200</p>
              </div>
              <div className="p-3 px-10 rounded-xl bg-black-700 text-center mt-8 sm:mt-0">
                <p className="text-gray">Items Owned</p>
                <p>200</p>
              </div>
            </div>
            <p className="text-gray mt-14">Date Joined: 07/05/22</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
