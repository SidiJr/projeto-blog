import { useEffect, useState } from "react";
import clsx from "clsx";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import api, { UPLOADS_URL } from "../../services/api";
import Button from "../../components/Base/Button";
import InfoUsuario from "../Usuario/InfoUsuario";
import { toast } from "react-toastify";
import { useData } from "../../contexts/DataContext";
import { FaEdit, FaTrash } from "react-icons/fa";
const PostCard = ({
  titulo,
  conteudo,
  imagem,
  dataCriacao,
  usuario,
  id,
  isActive,
  onClick,
}) => {
  const [file, setFile] = useState(null);
  const [fileStatus, setFileStatus] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data, updateData } = useData();

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
    if (isActive) return conteudo;
    return conteudo?.split(" ").slice(0, 20).join(" ") + "...";
  };

  const canEdit = user?.id === usuario?.id;

  const handleDeletePost = async (e) => {
    e.stopPropagation();
    api
      .delete(`posts/${id}`)
      .then((response) => {
        if (response.data.status === 200) {
          toast.success(response.data.message);
          const updatedPosts =
            data.posts?.filter((post) => post.id !== id) || [];
          updateData("posts", updatedPosts);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message || "Erro ao buscar dados");
      });
  };

  const handleEditPost = (e) => {
    e.stopPropagation();
    navigate(`/posts/form/${id}`);
  };

  return (
    <div
      className={clsx("w-full bg-white border-t border-gray-200 p-4", {
        "cursor-pointer hover:bg-gray-50 transition": !isActive,
      })}
      onClick={!isActive && onClick ? () => onClick(id) : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex justify-between items-center min-h-10">
        <InfoUsuario nome={usuario?.nome} size="md" id={usuario?.id} />

        {canEdit && isHovered && (
          <>
            <Button onClick={(e) => handleEditPost(e)} color="bg-blue-500 hover:bg-blue-700">
              <FaEdit />
            </Button>

            <Button onClick={(e) => handleDeletePost(e)} color="bg-red-500 hover:bg-red-700">
              <FaTrash />
            </Button>
          </>
        )}

        <span className="text-xs text-gray-500">{formatDate(dataCriacao)}</span>
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
