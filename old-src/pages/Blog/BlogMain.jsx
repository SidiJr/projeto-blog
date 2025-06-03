import { useEffect } from "react";
import { SubTitle, Title } from "../../components/Constructor/Texts";
import { useRequest } from "../../hooks/useRequest";
import BlogCard from "./BlogCard";
import CategoriesBar from "./CategoriesBar";
import { useBlog } from "../../contexts/BlogContext";

function BlogPage() {
  const { listar, data } = useRequest("posts");
  const { blogData, setBlogData, categoriasData } = useBlog();

  useEffect(() => {
    const buscarDados = async () => {
      await listar(categoriasData);
    };

    buscarDados();
  }, [listar, categoriasData]);

  useEffect(() => {
    if (data.length > 0) {
      setBlogData(data);
    }
  }, [data, setBlogData]);

  return (
    <>
      <CategoriesBar />

      <main className="flex-grow min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <section className="mb-10 w-full text-center">
          <Title title="Bem-vindo ao Blog!" />
          <SubTitle subtitle="Descubra, aprenda e se inspire com nossos conteúdos." />
        </section>

        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {blogData.length > 0 &&
            blogData.map((item, index) => <BlogCard key={index} post={item} />)}
        </section>
      </main>
    </>
  );
}

export default BlogPage;
