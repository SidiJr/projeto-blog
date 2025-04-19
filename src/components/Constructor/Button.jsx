import clsx from "clsx";
import React, { useMemo } from "react";

const Button = ({ href, onClick, children, className }) => {
  const style = useMemo(
    () =>
      clsx(
        "px-6 py-2 font-medium rounded-xl shadow-md transition-all duration-150",
        "bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400",
        "flex justify-center items-center",
        "active:scale-95",
        "hover:cursor-pointer",
        "capitalize",
        className
      ),
    [className]
  );

  return href ? (
    <a href={href} className={style}>
      {children}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={style}>
      {children}
    </button>
  );
};

export default Button;
