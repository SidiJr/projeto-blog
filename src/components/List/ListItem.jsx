import clsx from "clsx";
import React from "react";
import Button from "../Constructor/Button";
import { useNavigate } from "react-router-dom";
import { Edit, Trash } from "lucide-react";

const ListItem = ({ item, fields, type, handleDelete }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/${type}/form/${item.id}`);
  };

  return (
    <div
      className={clsx(
        "w-full rounded-md border px-4 py-2",
        "border-neutral-300 dark:border-neutral-600",
        "bg-white dark:bg-neutral-900",
        "text-neutral-800 dark:text-neutral-100",
        // "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        "transition duration-150 ease-in-out",
        // "cursor-pointer",
        "grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4 items-center"
      )}
    >
      {fields.map((key) => (
        <div key={key} className="truncate flex justify-center">
          {item[key]}
        </div>
      ))}
      <div className="flex justify-center gap-2">
        <Button onClick={() => handleDelete(item.id)} color={"bg-red-500 hover:bg-red-700"}>
          <Trash size={20} />
        </Button>
        <Button onClick={handleEdit} color={"bg-blue-500 hover:bg-blue-700"}>
          <Edit size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ListItem;
