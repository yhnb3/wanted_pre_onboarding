import { useState } from "react";

import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsCheckCircleFill,
} from "react-icons/bs";

export default function Input() {
  const [isReveal, setIsReveal] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    const emailRex =
      /^[A-Za-z][A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9](\.[A-Za-z0-9]+)*/g;
    const isValid = !!value.match(emailRex);

    setValue(value);

    if (isValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="grid grid-col-1 w-60 mt-10 mx-auto place-items-start">
      <label className="m-1 text-xs text-gray-700" htmlFor="email">
        E-mail
      </label>
      <div
        className={`relative w-60 ${
          !(!isValid && !isFocus && value.length > 0) ? "mb-5" : ""
        }`}
      >
        <input
          className="rounded-sm border-2 border-gray-300 py-1 px-2 w-full"
          type="text"
          name="email"
          value={value}
          autoComplete="false"
          autoFocus={false}
          onChange={handleChange}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        ></input>
        <BsCheckCircleFill
          className={`absolute right-2 bottom-2.5 ${
            value.length === 0
              ? "text-gray-500"
              : isValid
              ? "text-teal-500"
              : "text-gray-500"
          }`}
        />
      </div>
      {!isValid && !isFocus && value.length > 0 ? (
        <span className="ml-1 mb-5 text-xs text-red-400">
          Invalid email address
        </span>
      ) : null}

      <label className="m-1 text-xs text-gray-700" htmlFor="password">
        Password
      </label>
      <div className="relative w-60">
        <input
          className="rounded-sm border-2 border-gray-300 py-1 px-2 h-9 text-sm w-full"
          type={isReveal ? "text" : "password"}
          name="password"
          autoComplete="false"
          autoFocus={false}
          placeholder="Password"
        ></input>
        <div className="absolute right-2 bottom-2.5">
          {isReveal ? (
            <BsFillEyeFill
              className="text-teal-500"
              onClick={() => setIsReveal(false)}
            />
          ) : (
            <BsFillEyeSlashFill
              className="text-gray-500"
              onClick={() => setIsReveal(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
