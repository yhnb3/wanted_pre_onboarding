import { useState } from "react";

function TabItem({ idx, name, isSelected, handleSelect, handSlide }) {
  return (
    <div
      className={`relative h-10 w-40 border-b-2 font-bold font-xl border-gray-300 cursor-pointer ${
        isSelected ? "text-black" : "text-gray-300"
      }`}
      onClick={() => {
        handSlide(idx);
        handleSelect(idx);
      }}
    >
      {name}
    </div>
  );
}

export default function Tab() {
  const [select, setSelect] = useState(0);
  const [slide, setSlide] = useState("");

  const handSlide = (nextSelect) => {
    if (select === 0 && nextSelect === 1) setSlide("animate-slideLM");
    if (select === 1 && nextSelect === 2) setSlide("animate-slideMR");
    if (select === 2 && nextSelect === 1) setSlide("animate-slideRM");
    if (select === 1 && nextSelect === 0) setSlide("animate-slideML");
  };

  const items = ["감자", "고구마", "카레라이스"];
  return (
    <div className="relative h-10 w-96 mx-auto">
      <div className="flex justify-center">
        {items.map((element, idx) => (
          <TabItem
            idx={idx}
            key={element}
            name={element}
            isSelected={select === idx}
            handSlide={handSlide}
            handleSelect={setSelect}
          />
        ))}
      </div>
      <div
        className={`absolute bottom-0 left-66 opacity-1 h-1 w-32 border-b-2 border-teal-400 ${
          slide === "" ? "" : `${slide}`
        }`}
      ></div>
    </div>
  );
}
