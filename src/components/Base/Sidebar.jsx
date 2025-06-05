import React from "react";

const Sidebar = ({children}) => {
  return (
    <aside className="hidden lg:block w-80 p-4">
      <h2 className="font-bold text-xl mb-4">1</h2>
      {children}
    </aside>
  );
};

export default Sidebar;

