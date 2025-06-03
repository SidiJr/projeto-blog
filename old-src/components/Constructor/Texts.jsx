export const Title = ({ title }) => {
  return (
    <h1 className="text-4xl font-bold text-gray-800 p-4 capitalize">{title}</h1>
  );
};

export const SubTitle = ({ subtitle }) => {
  return <p className="text-lg  text-gray-600 mt-2 p-2">{subtitle}</p>;
};

export const Text = ({ text }) => {
  return <p className="text-base text-gray-500">{text}</p>;
};

export const SecondaryText = ({ secondarytext }) => {
  return <p className="text-base text-white">{secondarytext}</p>;
};
