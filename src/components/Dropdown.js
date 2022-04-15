import { useState } from "react";
import { BsFillCaretDownFill, BsSearch } from "react-icons/bs";

export default function Dropdown({ items, initialTarget }) {
  const [target, setTarget] = useState(initialTarget);
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState("");

  const handleDropdown = () => {
    setIsShow((prev) => !prev);
    setValue("");
  };

  return (
    <div className="my-10 mx-auto w-48">
      <div
        className="flex flex-row justify-between border border-gray-300 h-8 p-1.5 rounded-sm cursor-pointer"
        onClick={handleDropdown}
      >
        <p className="text-xs">{target}</p>
        <BsFillCaretDownFill className="mt-1 text-xs" />
      </div>
      {isShow ? (
        <div className="flex flex-col w-full mt-1 border border-gray-300 rounded-sm">
          <div className="relative border-b border-gry-300 py-1 px-3">
            <BsSearch className="text-xs absolute top-3 left-2 text-gray-300" />
            <input
              autoFocus={true}
              className="focus:outline-none text-xs"
              type="text"
              value={value}
              placeholder="Search Symbol"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="text-xs text-left py-1.5 pl-5">{initialTarget}</div>
          {items
            .filter((element) =>
              element.toLowerCase().indexOf(value) === -1 ? false : true
            )
            .map((element) => (
              <div
                className="text-xs text-left py-1.5 pl-5 cursor-pointer hover:bg-gray-200"
                key={element}
                onClick={() => {
                  setTarget(element);
                  handleDropdown();
                }}
              >
                {element}
              </div>
            ))}
        </div>
      ) : null}
    </div>
  );
}
