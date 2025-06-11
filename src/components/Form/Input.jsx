import clsx from "clsx";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  placeholder,
}) => {
  const inputClass = clsx(
    "border border-neutral-300 rounded-md w-full py-3 px-4 text-gray-700 placeholder-gray-400",
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    "hover:shadow-md hover:border-blue-400"
  );

  return (
    <div>
      {label && (
        <label className={clsx("w-full underline")} htmlFor={name}>
          {label}
        </label>
      )}
      {
        //   type === "select" ? (
        //     <select
        //       className={clsx(inputClass)}
        //       onChange={onChange}
        //       name={name}
        //       value={value}
        //     >
        //       <option value="">Selecione...</option>
        //       {data.map((item) => (
        //         <option key={item.id} value={item.id}>
        //           {item.nome}
        //         </option>
        //       ))}
        //     </select>
        //   )
        //   : type === "file" ? (
        //     <>
        //       {filePreview && (
        //         <div className="my-2 flex justify-center">
        //           <img
        //             src={filePreview}
        //             alt="Pré-visualização"
        //             className="w-32 h-32 object-cover"
        //           />
        //         </div>
        //       )}
        //       <div className="my-2 flex justify-center">
        //         <input
        //           className="hidden"
        //           type="file"
        //           name={name}
        //           id={name}
        //           onChange={handleFileChange}
        //           required={required}
        //         />
        //         <label
        //           htmlFor={name}
        //           className={clsx(
        //             "px-6 py-2 font-medium rounded-xl shadow-md transition-all duration-150",
        //             "bg-neutral-500 hover:bg-neutral-700",
        //             "text-white",
        //             "flex justify-center items-center",
        //             "active:scale-95",
        //             "hover:cursor-pointer",
        //             "capitalize"
        //           )}
        //         >
        //           {value ? "Alterar imagem" : "Escolher imagem"}
        //         </label>
        //       </div>
        //     </>
        //   )
        //    :
        type === "textarea" ? (
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
        )
      }
    </div>
  );
};

export default Input;
