const User = ({ text = "copy address" }) => (
  <div className=" flex items-center">
    <div className="w-20 h-20 bg-white rounded-full"></div>
    <div className="ml-2">
      <p className="text-2xl">User000</p>
      <p className=" text-gray text-sm">{text}</p>
    </div>
  </div>
);

export default User;
