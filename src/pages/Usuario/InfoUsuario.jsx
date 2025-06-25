import clsx from "clsx";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InfoUsuario = ({ nome, size = "md", id, style }) => {
  const navigate = useNavigate();
  const sizeClasses = {
    xs: { icon: "text-xs", text: "text-xs" },
    sm: { icon: "text-lg", text: "text-sm" },
    md: { icon: "text-2xl", text: "text-base" },
    lg: { icon: "text-3xl", text: "text-lg" },
    xl: { icon: "text-4xl", text: "text-xl" },
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  const handleClickUser = (e) => {
    e.stopPropagation();
    navigate(`/usuario/${id}`);
  };

  return (
    <div
      className={clsx(
        "flex items-center gap-2 text-gray-700 p-2",
        "hover:bg-gray-300 hover:text-gray-900 active:scale-95 rounded-xl  transition-all duration-150 cursor-pointer",
        style
      )}
      onClick={(e) => {
        handleClickUser(e);
      }}
    >
      <FaUserCircle className={`${selectedSize.icon} text-gray-500`} />
      <span className={`font-medium ${selectedSize.text}`}>{nome}</span>
    </div>
  );
};

export default InfoUsuario;
