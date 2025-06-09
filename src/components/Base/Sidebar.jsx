import React from "react";

const Sidebar = ({children}) => {
  return (
    <aside className="hidden lg:block w-80 p-4">
      {children}
    </aside>
  );
};

export default Sidebar;

