import { useEffect, useState } from "react";
import { UPLOADS_URL } from "../../services/api";
import InfoUsuario from "../Usuario/InfoUsuario";
import clsx from "clsx";

const Card = ({ titulo, conteudo, imagem, data, usuario }) => {
  const [file, setFile] = useState(null);
  const [fileStatus, setFileStatus] = useState("");

  useEffect(() => {
    if (imagem) {
      setFile(`${UPLOADS_URL}${imagem}`);
    }
  }, [imagem]);

  const hasFile = !(fileStatus === "error" || !file);

  return (
    <div className="w-full rounded-xl shadow-md overflow-hidden border border-gray-200">
      <div className="relative">
        {hasFile && (
          <img
            className="w-full h-48 object-cover"
            src={file}
            alt={titulo}
            onLoad={() => setFileStatus("success")}
            onError={() => setFileStatus("error")}
          />
        )}

        <div
          className={clsx(
            hasFile
              ? "absolute bottom-0 left-0 w-full bg-red-200 bg-opacity-50"
              : "border-b border-gray-200",
            "px-4 py-2 flex justify-between"
          )}
        >
          <h2 className="text-lg font-semibold">{titulo}</h2>
          <InfoUsuario nome={usuario?.nome} />
        </div>
      </div>

      <div>
        <p>{data}</p>
        <p>{conteudo}</p>
      </div>
    </div>
  );
};

export default Card;
