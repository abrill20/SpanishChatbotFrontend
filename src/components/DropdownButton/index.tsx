import "./index.css";
import { useState } from "react";

function DropdownButton({
  onButtonClick,
  iconURL,
  buttonText,
  showOnlyOnHover
}: {
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonText: string;
  iconURL: string;
  showOnlyOnHover: boolean
}) {
  const [dropdown, setDropdown] = useState(false);
  const dropdownSelect = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="z-30 w-5 h-5">
      <button
        className={`ExpandDown w-6 h-6 bg-center bg-contain ${showOnlyOnHover && 'opacity-0'} group-hover:opacity-100`}
        style={{ backgroundImage: `url(${iconURL})`}}
        onClick={dropdownSelect}
      ></button>
      <div className={`relative -left-11 ${dropdown ? 'shadow-lg': ''}`}>
        <button
          className={`DropButton p-2 font-sans font-light bg-white hover:bg-slate-100 rounded ${
            dropdown ? "scale-100 shadow-lg" : "scale-0"
          }`}
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default DropdownButton;
