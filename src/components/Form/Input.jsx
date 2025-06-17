import clsx from "clsx";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  placeholder,
  id,
  route,
}) => {
  const inputClass = clsx(
    "border border-neutral-300 rounded-md w-full py-1 px-4 text-gray-700 placeholder-gray-400",
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    "hover:shadow-md hover:border-blue-400"
  );

  const [filePreview, setFilePreview] = useState(null);

  useEffect(() => {
    if (type === "file" && id && filePreview === null && value) {
      setFilePreview(`http://localhost:3000/uploads/${value}`);
    }
  }, [filePreview, id, type, value]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onChange({ target: { name, value: file } });

    if (file) {
      setFilePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      {label && (
        <label className={clsx("w-full underline")} htmlFor={name}>
          {label}
        </label>
      )}
      {type === "search" ? (
        <SearchInput route={route} onChange={onChange} name={name} />
      ) : type === "file" ? (
        <>
          {filePreview && (
            <div className="my-2 flex justify-center">
              <img
                src={filePreview}
                alt="Pré-visualização"
                className="w-32 h-32 object-cover"
              />
            </div>
          )}
          <div className="my-2 flex justify-center">
            <input
              className="hidden"
              type="file"
              name={name}
              id={name}
              onChange={handleFileChange}
              required={required}
            />
            <label
              htmlFor={name}
              className={clsx(
                "px-6 py-2 font-medium rounded-xl shadow-md transition-all duration-150",
                "bg-neutral-500 hover:bg-neutral-700",
                "text-white",
                "flex justify-center items-center",
                "active:scale-95",
                "hover:cursor-pointer",
                "capitalize"
              )}
            >
              {value ? "Alterar imagem" : "Escolher imagem"}
            </label>
          </div>
        </>
      ) : type === "textarea" ? (
        <textarea
          className={clsx(inputClass)}
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows="4"
          cols="50"
        />
      ) : (
        <input
          className={clsx(inputClass)}
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Input;
