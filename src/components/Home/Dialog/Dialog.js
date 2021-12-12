import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import DetailText from "./DetailText";
import trust from "../../../assets/trust.png";
import metaMask from "../../../assets/metamask.png";

export function SetupWalletModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="mt-6 mb-14">
        <button
          type="button"
          onClick={openModal}
          className="text-white text-opacity-50 underline"
        >
          How to setup wallet and buy
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-sm px-4 py-6 sm:p-8 my-8 overflow-hidden sm:text-left text-white align-middle transition-all transform bg-pink-800 rounded-2xl modal-wrapper">
                <Dialog.Title as="h3" className="text-3xl text-shadow mb-10">
                  How to setup a wallet
                </Dialog.Title>
                <div className="mx-5">
                  <p className="text-md mb-5">
                    1) Download Metamask or Trust Wallet
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className="w-4/5"
                      onClick={() =>
                        window.open("https://trustwallet.com/", "_blank")
                      }
                    >
                      <img alt="" src={trust} />
                    </button>
                    <button
                      type="button"
                      className="w-4/5 justify-self-end"
                      onClick={() =>
                        window.open("https://metamask.io/", "_blank")
                      }
                    >
                      <img alt="" src={metaMask} />
                    </button>
                  </div>

                  <p className="text-md mt-9 mb-5">
                    2) Buy BNB in the app or Binance
                  </p>
                  <div className="w-4/5 mx-auto">
                    <button
                      onClick={() =>
                        window.open("https://www.binance.com/en", "_blank")
                      }
                      type="button"
                      className="w-full custom-box-shadow rounded py-2 px-4 mb-5 bg-pink-800"
                    >
                      Get BNB on Binance
                    </button>
                    <button
                      onClick={() =>
                        window.open("https://trustwallet.com/", "_blank")
                      }
                      type="button"
                      className="w-full custom-box-shadow rounded py-2 px-4 bg-pink-800"
                    >
                      Get BNB on Trust Wallet
                    </button>
                  </div>

                  <p className="text-md mt-9 mb-4">
                    3) Now you're ready to buy $VPR!
                  </p>
                  <div className="w-4/5 mx-auto">
                    <button
                      type="button"
                      className="w-full custom-box-shadow rounded py-2 px-4 bg-purple-700"
                      onClick={() =>
                        (window.location.href =
                          "https://pancakeswap.finance/swap?outputCurrency=0x73f5a4808456f4927ee13cbe76b2b726136ce962")
                      }
                    >
                      Buy $VPR on Pancakeswap
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export function TokenomicsModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="text-white underline text-2xl"
        >
          Vaporblitz Tokenomics
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-width p-6 my-8 overflow-hidden text-left text-white text-center align-middle transition-all transform bg-pink-800 rounded-2xl modal-wrapper">
                <Dialog.Title
                  as="h3"
                  className="text-2xl uppercase text-shadow mb-10"
                >
                  TOKENOMICS
                </Dialog.Title>
                <div className="mt-2">
                  <DetailText text="Total Tokens: 500,000,000" />
                  <DetailText text="Team: 5% (15% LOCKED)" />
                  <DetailText
                    text1="Token Time Locked Contract:"
                    text2="0x73f5a4808456f4927ee13cbe76b2b726136ce962"
                    multi="true"
                  />
                  <DetailText
                    text1="Token Liquidity Locked:"
                    text2="liquidity locked"
                    multi="true"
                    underline="true"
                  />
                  <DetailText text="3% Marketing, 2% Burned, 2% Redistributed" />
                  <DetailText text="LIQUIDITY LOCKED" color="green" />
                  <p className="text-2xl uppercase text-shadow mt-10 mb-2">
                    Funds use:
                  </p>
                  <DetailText text="50% Marketing" />
                  <DetailText text="50% Game Development and Updates" />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export function VaporcrateModal(props) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="border border-white rounded-lg text-white hover:opacity-70 py-1 px-5 mt-2"
      >
        Buy Now
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center bg-black-100">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-sm pt-14 pb-6 px-10 text-white align-middle transition-all transform bg-pink-800 rounded-2xl modal-wrapper">
                <div className={`relative blur-back ${props.color}`}>
                  <img alt="" src={props.src} className="mx-auto" />
                </div>
                <p className="text-white pt-10">{props.title}</p>
                <p className="flex items-center justify-center text-white text-opacity-50 text-xs h-8 md:h-20 lg:h-12">
                  {props.desc}
                </p>
                <button
                  type="button"
                  onClick={props.buyClickHandle}
                  className="border border-white rounded-lg text-white hover:opacity-70 py-1 px-5 mt-2"
                >
                  Buy Now
                </button>
                <p className="text-white text-xs pt-2 pb-1">
                  {props.tokenRemain}/{props.count} Left
                </p>
                <a
                  href="https://vaporblitz.gitbook.io/whitepaper/information/marketplace"
                  target="_blank"
                  className="text-white text-opacity-50 text-xs underline"
                  rel="noreferrer"
                >
                  More Information about Vaporcrates
                </a>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
