import React from "react";

const Sidebar = ({children}) => {
  return (
    <aside className="hidden lg:block w-60 p-4 bg-blue-100">
      {children}
    </aside>
  );
};

export default Sidebar;

