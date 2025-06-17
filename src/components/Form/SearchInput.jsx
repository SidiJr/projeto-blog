import { useEffect, useState, useRef } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

const SearchInput = ({ route, onChange, name }) => {
  const [searchParams, setSearchParams] = useState("");
  const [searchInputData, setSearchInputData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const isSelecting = useRef(false);
  const inputRef = useRef(null);

  const fetchData = async (query) => {
    try {
      let url = route;
      if (query) {
        url += `?searchParams=${encodeURIComponent(query)}`;
      }

      const response = await api.get(url);

      if (response.data.status === 200) {
        setSearchInputData(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message || "Erro ao buscar dados");
    }
  };

  useEffect(() => {
    if (isSelecting.current) {
      isSelecting.current = false;
      return;
    }
    if (!searchParams) {
      setSearchInputData([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      fetchData(searchParams);
    }, 500);

    return () => clearTimeout(delayDebounce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleBlur = () => {
    setSearchInputData([]);

    if (!selectedItem || searchParams !== selectedItem.nome) {
      setSelectedItem(null);
      setSearchParams("");
      onChange(null, { name, id: null });
    }
  };

  const handleClickItem = (item) => {
    onChange(null, { name, id: item.id });
    isSelecting.current = true;
    setSelectedItem(item);
    setSearchParams(item.nome);
    setSearchInputData([]);
  };

  const handleFocus = () => {
    inputRef.current?.select();
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        className="border p-2 rounded w-full"
        value={searchParams}
        onChange={(e) => {
          setSearchParams(e.target.value);
          setSelectedItem(null);
        }}
        placeholder="Digite para buscar..."
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {searchInputData.length > 0 && (
        <ul className="absolute bg-white border rounded w-full max-h-40 overflow-y-auto z-10">
          {searchInputData.map((item) => (
            <li
              key={item.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onMouseDown={() => handleClickItem(item)}
            >
              {item.nome}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
