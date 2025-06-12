import { clsx } from "clsx";
import React from "react";

const CategoriaItem = ({ nome }) => {
  return (
    <div
      className={clsx(
        "flex justify-center items-center",
        "border border-gray-300 rounded-md",
        "px-4 py-2",
        "cursor-pointer select-none",
        "transition duration-200 ease-in-out",
        "hover:shadow-lg hover:border-blue-400 hover:text-blue-600",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        "bg-white text-gray-800"
      )}
    >
      <p className="text-sm font-medium">{nome}</p>
    </div>
  );
};

export default CategoriaItem;
