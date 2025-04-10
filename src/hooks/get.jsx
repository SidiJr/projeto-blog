// import React from "react";

// const get = () => {
//   return <div>get</div>;
// };

// export default get;

// api
//   .get(`/books/${bookId}`)
//   .then((response) => {
//     const { title, description, excerpt, pageCount, publishDate, idAuthor } =
//       response.data;
//     setValue("Título", title);
//     setValue("Descrição", description);
//     setValue("Sinopse", excerpt);
//     setValue("Número de Páginas", pageCount);
//     setValue(
//       "Data de Lançamento",
//       new Date(publishDate).toISOString().split("T")[0]
//     );
//     setValue("Autor", idAuthor);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
