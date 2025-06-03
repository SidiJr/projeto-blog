import React from "react";
import List from "../../components/List/List";

const PostsList = () => {
  const fields = ["titulo"];
  const extraParams = ["Título"];

  return <List type="posts" fields={fields} extraParams={extraParams} />;
};

export default PostsList;
