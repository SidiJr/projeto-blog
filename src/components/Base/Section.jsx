import React from "react";

const Section = ({ children }) => {
  return (
    <section className="w-full max-w-lg border-x border-gray-200 flex flex-col gap-4 px-4">
      {children}
    </section>
  );
};

export default Section;
