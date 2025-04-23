import clsx from "clsx";
import React, { useMemo } from "react";

const Button = ({ href, onClick, children, color, isForm, textColor }) => {
  const style = useMemo(
    () =>
      clsx(
        "px-6 py-2 font-medium rounded-xl shadow-md transition-all duration-150",
        color ? color : "bg-gray-500 hover:bg-gray-700",
        textColor ? textColor : "text-white",
        "flex justify-center items-center",
        "active:scale-95",
        "hover:cursor-pointer",
        "capitalize"
      ),
    [color, textColor]
  );

  return href ? (
    <a href={href} className={style}>
      {children}
    </a>
  ) : (
    <button
      type={isForm ? "submit" : "button"}
      onClick={onClick}
      className={style}
    >
      {children}
    </button>
  );
};

export default Button;
