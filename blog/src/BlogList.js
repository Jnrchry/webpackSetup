import React from "react";

const BlogList = (props) => {
  const blog = props.blog;
  const title = props.title;

  return (
    <div className="blogList">
      <h2>{title}</h2>
      {blog.map((data) => (
        <div className="blog-preview" key={data.id}>
          <h2>{data.title}</h2>
          <p>writte by {data.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
