import { useEffect, useState } from "react";
import { useRequest } from "../../hooks/useRequest";
import { Text } from "../../components/Constructor/Texts";

const AutorInfo = ({ autorId }) => {
  const { buscarPorId } = useRequest("autores");
  const [autor, setAutor] = useState();

  useEffect(() => {
    const buscarDadosPorId = async () => {
      if (autorId) {
        const data = await buscarPorId(autorId);
        setAutor(data);
      }
    };

    buscarDadosPorId();
  }, [buscarPorId, autorId]);

  return <Text text={`Autor(a): ${autor?.nome}`} />;
};

export default AutorInfo;
