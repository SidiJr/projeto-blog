// Fundo principal: bg-gray-50

// Sidebar/Menu: bg-gray-900 (para o fundo) e text-white (para o texto)

// Texto principal: text-gray-800

// Texto secundário: text-gray-500

// Botão primário: bg-indigo-600, hover:bg-indigo-700, text-white

// Botão secundário: bg-gray-200, hover:bg-gray-300, text-gray-800

// Alerta de sucesso: bg-green-500, text-white

// Alerta de erro: bg-red-500, text-white

// Link/Ação secundária: text-indigo-500, hover:text-indigo-700

export const Title = ({ title }) => {
  return (
    <h1 className="text-4xl font-bold text-gray-800 p-4 capitalize">{title}</h1>
  );
};

export const SubTitle = ({ subtitle }) => {
  return (
    <p className="text-lg  text-gray-600 mt-2 p-2">{subtitle}</p>
  );
};

export const Text = ({ text }) => {
  return <p className="text-base text-gray-500">{text}</p>;
};
