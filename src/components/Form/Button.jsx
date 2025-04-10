import clsx from 'clsx';
import React from 'react';

const BaseButton = ({ isForm, text, buttonClass }) => {
  const baseButtonClass = "bg-black text-white px-4 py-4 rounded-md w-48";
  const transitionClass = "transition duration-300 transform";
  const hoverClass = "hover:scale-105 hover:bg-gray-800";
  const focusClass = "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black";
  const activeClass = "active:scale-95";

  return (
    <button
      type={isForm ? 'submit' : 'button'}
      className={clsx(
        baseButtonClass, 
        transitionClass, 
        hoverClass, 
        focusClass, 
        activeClass, 
        buttonClass
      )}
    >
      {text}
    </button>
  );
};

export default BaseButton;