import React from "react";
import { SubTitle, Title } from "../components/Constructor/Texts";
import Container from "../components/Constructor/Container";
import { BookOpen, FileText, User } from "lucide-react";

function Home() {
  return (
    <main className="flex-grow min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Primeira seção - Título e Subtítulo ocupando toda a largura */}
      <section className="mb-10 w-full text-center">
        <Title title="Painel de Administração" />
        <SubTitle subtitle="Gerencie seus posts, categorias e autores de forma rápida e prática." />
      </section>

      {/* Segunda seção - Containers lado a lado em telas grandes e empilhados em telas pequenas */}
      <section className="w-full flex flex-wrap justify-center gap-6">
        <Container type="posts" icon={BookOpen} />
        <Container type="categorias" icon={FileText} />
        <Container type="autores" icon={User} />
      </section>
    </main>
  );
}

export default Home;
