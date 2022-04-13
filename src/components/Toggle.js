import { useState } from "react";

export default function Toggle() {
  const [base, setBase] = useState("");

  return (
    <div className="w-full h-20">
      <div className="z-10 relative rounded-l-full rounded-r-full my-10 mx-auto h-10 w-36 bg-gray-300">
        <div
          className={`z-5 absolute top-1 ml-2 rounded-l-full rounded-r-full w-16 h-8 font-bold bg-white ${
            base === ""
              ? ""
              : base === true
              ? "animate-buttonOff"
              : "animate-buttonOn"
          }`}
        ></div>
        <span
          className="inline-block top-2 relative z-15 text-center w-16 h-6 font-bold opacity-100 cursor-pointer"
          onClick={() => {
            setBase(true);
          }}
        >
          기본
        </span>
        <span
          className="inline-block top-2 relative z-15 text-center w-16 h-6 font-bold opacity-100 cursor-pointer"
          onClick={() => {
            setBase(false);
          }}
        >
          상세
        </span>
      </div>
    </div>
  );
}
