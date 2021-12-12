import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assets/logo.png";
import "./header.css";
import WalletModal from "./walletModal/WalletModal";
import { Link } from "react-router-dom";
const navigation = [
  {
    name: "Marketplace",
    href: "marketplace",
    current: false,
  },
  {
    name: "Whitepaper",
    href: "https://vaporblitz.gitbook.io/whitepaper/",
    current: false,
  },
  { name: "PVP", href: "#pvp", current: false },
  { name: "P2E", href: "#pve", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(props) {
  const [address, setAddress] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    if (!props.metamaskProvider) return;

    props.metamaskProvider.on("accountsChanged", handleAccountsChanged);
    props.metamaskProvider.on("chainChanged", (_chainId) =>
      window.location.reload()
    );

    props.metamaskProvider
      .request({ method: "eth_accounts" })
      .then(handleAccountsChanged)
      .catch((err) => {
        console.error(err);
      });

    if (address) {
      setShowModal(false);
    }
  }, [address, props.metamaskProvider]);

  function handleAccountsChanged(accounts) {
    if (accounts[0])
      setAddress(`${accounts[0].slice(0, 5)}...${accounts[0].slice(-4)}`);
    else setAddress(accounts[0]);
  }

  function handleConnectWallet() {
    if (!props.metamaskProvider) {
      alert("Please install metamask!");
      return;
    }
    props.metamaskProvider
      .request({ method: "eth_requestAccounts" })
      .then(handleAccountsChanged)
      .catch((error) => {
        if (error.code === 4001) {
          console.log("Please connect to MetaMask.");
        } else {
          console.error(error);
        }
      });
  }

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="relative grid grid-cols-12 gap-4 items-center bg-black-700 text-white">
              <div className="hidden md:block col-span-2">
                <a href="/">
                  <img className="w-20 ml-2 pt-2 pb-1" src={logo} alt="" />
                </a>
              </div>
              <div className="col-span-8 md:col-span-5">
                <div className="flex justify-between md:justify-around px-2 py-4 ">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? "text-white" : "hover:text-white",
                        "px-3 py-2 rounded-md text-sm md:text-lg"
                      )}
                      {...(item.href.startsWith("https://")
                        ? { target: "_blank", rel: "noreffer" }
                        : {})}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden md:block col-span-5">
                <div className="flex justify-center gap-6">
                  <button
                    type="button"
                    className="border-2 border-pink-800 rounded-xl  px-2"
                    // onClick={() =>
                    //   window.open(
                    //     "https://pancakeswap.finance/swap?outputCurrency=0x73f5a4808456f4927ee13cbe76b2b726136ce962",
                    //     "_blank"
                    //   )
                    // }
                  >
                    Buy $VPR
                  </button>
                  <button
                    type="button"
                    className="border border-white rounded-xl pl-4 pr-10"
                    // onClick={() =>
                    //   window.open(
                    //     "https://pancakeswap.finance/swap?outputCurrency=0x73f5a4808456f4927ee13cbe76b2b726136ce962",
                    //     "_blank"
                    //   )
                    // }
                  >
                    Play for Free
                  </button>
                  {!address ? (
                    <button
                      type="button"
                      className="bg-pink-300 rounded-xl pl-4 pr-4"
                      onClick={modalHandler}
                    >
                      {address ? address : "Connect Wallet"}
                    </button>
                  ) : (
                    <MyAccount />
                  )}
                </div>
              </div>
              <div className="absolute inset-y-0 right-1 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open Button Menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="grid justify-center gap-2 bg-black-700 text-white py-3">
                <button
                  type="button"
                  className="border-2 border-pink-800 rounded-xl  px-2"
                  // onClick={() =>
                  //   window.open(
                  //     "https://pancakeswap.finance/swap?outputCurrency=0x73f5a4808456f4927ee13cbe76b2b726136ce962",
                  //     "_blank"
                  //   )
                  // }
                >
                  Buy $VPR
                </button>
                <button
                  type="button"
                  className="border border-white rounded-xl pl-4 pr-10"
                  // onClick={() =>
                  //   window.open(
                  //     "https://pancakeswap.finance/swap?outputCurrency=0x73f5a4808456f4927ee13cbe76b2b726136ce962",
                  //     "_blank"
                  //   )
                  // }
                >
                  Play for Free
                </button>
                {!address ? (
                  <button
                    type="button"
                    className="bg-pink-300 rounded-xl pl-4 pr-4"
                    onClick={modalHandler}
                  >
                    {address ? address : "Connect Wallet"}
                  </button>
                ) : (
                  <MyAccount />
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <WalletModal
        handleConnectWallet={handleConnectWallet}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

const linkList = [
  {
    name: "View Account",
    link: "account",
  },
  {
    name: "My Inventory",
    link: "inventory",
  },
];

const MyAccount = () => {
  const [open, setOpen] = useState(false);
  const dropDownHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={`flex items-center my-4 md:my-0 account relative `}>
      <div className="w-8 h-8 rounded-full bg-white mr-2"></div>
      <div
        className="flex items-center cursor-pointer select-none"
        onClick={dropDownHandler}
      >
        <p className="mr-1">My Account</p>
        <i className="fas fa-chevron-down"></i>
      </div>
      <div
        className={`account-menu absolute top-full right-0 p-2 rounded-lg bg-black-500 border-2 border-black-700 ${
          open ? "block" : "hidden"
        }`}
      >
        {linkList.map((v, i) => (
          <Link
            className="p-1 text-sm hover:bg-gray-700 rounded-lg cursor-pointer block"
            key={i}
            to={`/${v.link}`}
            onClick={dropDownHandler}
          >
            {v.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
