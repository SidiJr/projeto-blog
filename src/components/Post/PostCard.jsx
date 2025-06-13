import { useEffect, useState } from "react";
import { UPLOADS_URL } from "../../services/api";
import InfoUsuario from "../Usuario/InfoUsuario";

const PostCard = ({ titulo, conteudo, imagem, data, usuario, id }) => {
  const [file, setFile] = useState(null);
  const [fileStatus, setFileStatus] = useState("");

  useEffect(() => {
    if (imagem) {
      setFile(`${UPLOADS_URL}${imagem}`);
      setFileStatus("");
    } else {
      setFile(null);
      setFileStatus("");
    }
  }, [imagem]);

  const hasImage = file && fileStatus !== "error";


  const formatDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatContent = (conteudo) => {
    const splitDesc = conteudo.split(" ").slice(0, 20).join(" ") + "...";
    return splitDesc;
  };

  return (
    <div className="w-full bg-white border-t border-gray-200 p-4 hover:bg-gray-50 transition cursor-pointer">
      <div className="flex justify-between items-start">
        <InfoUsuario nome={usuario?.nome} size="md" />
        <span className="text-xs text-gray-500">{formatDate(data)}</span>
      </div>

      {titulo && (
        <h2 className="mt-2 text-base font-semibold text-gray-800">{titulo}</h2>
      )}

      <p className="mt-1 text-gray-700 whitespace-pre-line">
        {formatContent(conteudo)}
      </p>

      {hasImage && (
        <div className="mt-3 rounded-xl overflow-hidden border border-gray-200">
          <img
            src={file}
            alt={titulo}
            onLoad={() => setFileStatus("success")}
            onError={() => setFileStatus("error")}
            className="w-full object-cover max-h-80"
          />
        </div>
      )}
    </div>
  );
};

export default PostCard;
