import { FaUserCircle } from "react-icons/fa";

const InfoUsuario = ({ nome, size = "md" }) => {
  const sizeClasses = {
    xs: { icon: "text-xs", text: "text-xs" },
    sm: { icon: "text-lg", text: "text-sm" },
    md: { icon: "text-2xl", text: "text-base" },
    lg: { icon: "text-3xl", text: "text-lg" },
    xl: { icon: "text-4xl", text: "text-xl" },
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className="flex items-center gap-2 text-gray-700">
      <FaUserCircle className={`${selectedSize.icon} text-gray-500`} />
      <span className={`font-medium ${selectedSize.text}`}>{nome}</span>
    </div>
  );
};

export default InfoUsuario;
