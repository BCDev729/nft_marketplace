/* eslint-disable jsx-a11y/anchor-is-valid */
import "../header.css";
import MetaLogo from "../../../assets/wallet-modal-image.png";

const WalletModal = ({ handleConnectWallet, showModal, setShowModal }) => {
  return (
    <div
      className={`fixed top-2/4 left-2/4 bg-black-700 wallet-modal rounded-3xl text-white ${
        showModal ? "block" : "hidden"
      }`}
    >
      <h2 className=" text-2xl py-4 border-b border-gray relative wallet-title">
        Login or Create an account
        <span
          className="font-bold close"
          onClick={() => setShowModal((prev) => !prev)}
          role="button"
        >
          x
        </span>
      </h2>
      <div className="meta-logo">
        <button onClick={handleConnectWallet}>
          <img src={MetaLogo} alt="" />
        </button>
        <a href="#" className="block mt-3 text-xs text-gray-400 underline">
          How to create a metamask account?
        </a>
      </div>
    </div>
  );
};

export default WalletModal;
