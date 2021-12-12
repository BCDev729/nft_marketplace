import { useState } from "react";
import "../Marketplace.css";
export default function ItemCheck(props) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="marketplace-cheak">
      <label className="text-white inline-block text-xl">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          name={props.name}
        />
        <span></span>
        <p className="ml-2 inline-block">{props.name}</p>
      </label>
    </div>
  );
}
