import { useState } from "react";
import styled from "styled-components";

const Slide = styled.input`
  margin: 0 0.5rem;
  width: 14rem;
  -webkit-appearance: none;
  background: linear-gradient(
    to right,
    rgb(20 184 166) 0%,
    rgb(20 184 166) ${(props) => props.value}%,
    rgb(209 213 219) ${(props) => props.value}%,
    rgb(209 213 219) 100%
  );
  cursor: pointer;
  height: 0.4rem;
  border-radius: 0.5rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: rgb(20 184 166);
    border: solid;
    border-color: white;
    height: 1rem;
    width: 1rem;
    border-radius: 100%;
    box-shadow: 0 0.5px 0.5px 0 rgb(156 163 175);
  }
`;

const SlideBtn = styled.button`
  width: 30px;
  background: rgb(209 213 219);
  font-size: 3px;
  height: 20px;
  border-radius: 15px;
`;

const SlideCircle = styled.div`
  position: absolute;
  z-index: -1;
  background: ${(props) =>
    props.isOn ? "rgb(20 184 166)" : "rgb(209 213 219)"};
  bottom: 0.2rem;
  left: ${(props) => props.left}rem;
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 0.8rem;
`;

export default function Slider() {
  const [value, setValue] = useState(50);

  return (
    <div className="w-60 my-10 mx-auto">
      <div className="w-60 rounded-sm border-2 border-gray-300 flex flex-row py-1 px-2 bg-gray-50">
        <div className="w-48 text-right">{value}</div>
        <div className="w-8 p-1 text-xs text-gray-400">%</div>
      </div>
      <div className="relative">
        <Slide
          value={value}
          min={1}
          max={100}
          type="range"
          onChange={(e) => {
            const rate = e.target.value;
            setValue(rate);
          }}
        />
        <SlideCircle left={0.5} isOn={true} />
        <SlideCircle left={3.7} isOn={value >= 25 ? true : false} />
        <SlideCircle left={7} isOn={value >= 50 ? true : false} />
        <SlideCircle left={10.5} isOn={value >= 75 ? true : false} />
        <SlideCircle left={13.8} isOn={false} />
      </div>

      <div
        className="flex flex-row justify-between mt-1"
        onClick={(e) => {
          if (e.target.tagName === "BUTTON") {
            const target = e.target.innerText;
            setValue(parseInt(target.slice(0, target.length - 1)));
          }
        }}
      >
        <SlideBtn>1%</SlideBtn>
        <SlideBtn className="mr-1">25%</SlideBtn>
        <SlideBtn>50%</SlideBtn>
        <SlideBtn className="ml-1">75%</SlideBtn>
        <SlideBtn>100%</SlideBtn>
      </div>
    </div>
  );
}
