import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-2 text-sm text-gray-600">Buscando dados...</p>
    </div>
  );
};

export default Loading;
