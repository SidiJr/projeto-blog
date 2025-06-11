export const Title = ({ children, className = "" }) => {
  return (
    <h1 className={`text-4xl font-bold p-4 capitalize ${className}`}>
      {children}
    </h1>
  );
};

export const SubTitle = ({ children, className = "" }) => {
  return (
    <h2 className={`text-2xl font-semibold p-4 ${className}`}>{children}</h2>
  );
};

export const Paragraph = ({ children, className = "" }) => {
  return <p className={`text-base p-4 ${className}`}>{children}</p>;
};

export const SecondaryText = ({ children, className = "" }) => {
  return <span className={`text-sm p-4 ${className}`}>{children}</span>;
};

export const HighlightText = ({ children, className = "" }) => {
  return (
    <span className={`text-base font-medium p-4 ${className}`}>{children}</span>
  );
};
