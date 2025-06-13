import { FaSearch } from "react-icons/fa";

const NoData = ({ message = "Nenhum dado disponível." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-gray-500">
      <FaSearch className="w-5 h-5 mb-2" />
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default NoData;
