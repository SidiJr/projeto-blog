import React, { useEffect, useState } from "react";
import { UPLOADS_URL } from "../../services/api";

const Card = ({ titulo, conteudo, imagem, data }) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (imagem) {
      setFile(`${UPLOADS_URL}${imagem}`);
    }
  }, [imagem]);

  return (
    <div className="w-full rounded-xl shadow-md overflow-hidden border border-gray-200">
      <div className="relative">
        {file ? (
          <>
            <img className="w-full h-48 object-cover" src={file} alt={titulo} />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 px-4 py-2">
              <h2 className="text-white text-lg font-semibold">{titulo}</h2>
            </div>
          </>
        ) : (
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-semibold">{titulo}</h2>
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">{data}</p>
        <p className="text-gray-700 text-sm">{conteudo}</p>
      </div>
    </div>
  );
};

export default Card;
