import React from "react";
import List from "../../components/List/List";

const AutoresList = () => {
  const fields = ["nome"];

  return <List type="autores" fields={fields} />;
};

export default AutoresList;
