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
  return <p className="text-2xl font-semibold text-gray-800 p-10">{title}</p>;
};

export const Text = ({ text }) => {
  return <p className="text-base text-gray-500">{text}</p>;
};
