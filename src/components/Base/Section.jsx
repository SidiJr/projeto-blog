import React from 'react';

const Section = ({children}) => {
  return (
    <section className="w-full max-w-2xl border-x border-gray-200 p-4">
        <h1 className="text-xl font-bold mb-4">2</h1>
        {children}
      </section>
  );
}

export default Section;
