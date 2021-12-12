// import { useParams } from "react-router-dom";
import Gun from "../../../assets/Gun-2.png";
const Index = () => {
  //   const { id } = useParams();
  return (
    <div className="bg-black-500 text-white py-10 min-h-screen">
      <div className="container custom-container text-left">
        <div className="bg-black-700 rounded-xl  mx-auto  w-max p-4 mb-6">
          <h3 className="text-3xl no">Bluedrift Rifle</h3>
          <div className="flex justify-between mt-3">
            <span className=" text-legendary">Legendary</span>
            <span>#16421</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10">
          <div className="hidden md:block md:col-span-3"></div>
          <div className="md:col-span-6">
            <div className="border border-legendary product-bg py-16 bg-black-700 max-w-lg w-full mx-auto ">
              <img src={Gun} alt="" />
            </div>
          </div>
          <div className="col-span-3 hidden md:block">
            <div>
              <Wrapper />
              <div className="bg-black-700 rounded-xl  mx-auto  p-4 mb-6 w-full text-center">
                <p className="text-sm text-gray">Buy now Price</p>
                <p className="text-xl">0.5 BNB</p>
                <button className="bg-legendary rounded-full w-full text-center py-1 text-xl mt-4">
                  {" "}
                  Buy Now
                </button>
              </div>
              <div className="bg-black-700 rounded-xl  mx-auto  w-max p-4 mb-6">
                1/3 Sold
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray mt-8">
          <p className="border-b border-gray pb-1">Information</p>
          <p className="py-8 text-xl md:text-2xl">
            The Bluedrift Rifle is a{" "}
            <span className="text-legendary">legendary</span> skin which can be
            used in-game or sold on the marketplace.
          </p>
          <p className="border-b border-gray pb-1">Attributes</p>
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-10 py-6">
            <Wrapper title="Rarity:" desc="Legendary" />
            <Wrapper title="Lootbox Item:" desc="Unlockable" />
            <Wrapper title="Type:" desc="Assault Rifle" />
          </div>
        </div>
        <p className="border-b border-gray pb-1">Transactions</p>
        <div className="bg-black-700 mt-8 pb-96">
          <div className="border-b border-gray py-4 flex justify-evenly text-gray">
            <p>Seller</p>
            <p>Tx</p>
            <p>Status</p>
            <p>Price</p>
          </div>
        </div>
        <div className="bg-black-700 rounded-xl  mx-auto  w-max p-2 px-20 mt-8 mb-6">
          <p>Item Released: 19/09/21</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

const Wrapper = ({ title = "User000", desc = "Owner" }) => (
  <div className="bg-black-700 rounded-xl  mx-auto  p-4 mb-6 w-full text-center">
    <p className="text-xl text-white">{title}</p>
    <p className="text-sm text-gray">{desc}</p>
  </div>
);
