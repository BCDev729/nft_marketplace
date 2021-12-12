import Gun from "../../../assets/marketplace/gun.png";
const Card = ({ item }) => (
  <div className={`${item.tagClass} pt-6 pb-2 rounded-2xl bg-black-700 `}>
    <div className="py-20 px-4 gun-bg">
      <img src={Gun} alt="" />
    </div>
    <div>
      <h6 className="text-xl pb-4 border-b border-gray pl-4">{item.name}</h6>
      <div className=" px-4 py-2 flex justify-between items-center">
        <div className="flex">
          {item.tags.map((v, i) => (
            <div className={`${v.class} mr-2`} key={i}>
              {v.content}
            </div>
          ))}
        </div>
        <div className="bg-black-500 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
          +
        </div>
      </div>
    </div>
  </div>
);

export default Card;
