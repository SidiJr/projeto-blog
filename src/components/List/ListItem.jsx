import clsx from "clsx";
import React from "react";
import Button from "../Constructor/Button";

const ListItem = ({ item, fields, onDelete }) => {
  const handleDelete = () => {
    if (onDelete) onDelete(item.id);
  };

  return (
    <div
      className={clsx(
        "w-full rounded-md border px-4 py-2",
        "border-neutral-300 dark:border-neutral-600",
        "bg-white dark:bg-neutral-900",
        "text-neutral-800 dark:text-neutral-100",
        "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        "transition duration-150 ease-in-out",
        "cursor-pointer",
        "grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4 items-center"
      )}
    >
      {fields.map((key) => (
        <div key={key} className="truncate">
          {item[key]}
        </div>
      ))}
      <div className="flex justify-end">
        <Button onClick={handleDelete}>Deletar</Button>
      </div>
    </div>
  );
};

export default ListItem;
