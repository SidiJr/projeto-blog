import React from "react";

const Sidebar = ({children}) => {
  return (
    <aside className="w-80 block p-4 bg-blue-100">
      {children}
    </aside>
  );
};

export default Sidebar;

