import React from "react";
import { createPortal } from "react-dom";
import { useModal } from "../../contexts/ModalContext";
import { FaTimes } from "react-icons/fa";
import { useForm } from "../../contexts/FormContext";

const Modal = ({ title, children }) => {
  const { isOpen, setIsOpen } = useModal();
  const { setFormData } = useForm();

  const handleClose = () => {
    setIsOpen(false);
    setFormData({});
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded p-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="mb-4 border-b pb-2 flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            <FaTimes size={20} />
          </button>
        </header>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
