import clsx from "clsx";
import React, { useMemo } from "react";

const Button = ({ href, onClick, children, className, color }) => {
  const style = useMemo(
    () =>
      clsx(
        "px-6 py-3 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 ",
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
        "flex justify-center items-center",
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
