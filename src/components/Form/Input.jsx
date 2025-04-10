import clsx from "clsx";
import React from "react";

const Input = ({ label, type, name, value, onChange, required, textArea }) => {
  return (
    <div>
      {label && (
        <label className={clsx("w-full underline")} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={clsx(
          "border border-neutral-300 rounded-md w-full py-3 px-4 text-gray-700 placeholder-gray-400",
          "transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          "hover:shadow-md hover:border-blue-400"
        )}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
