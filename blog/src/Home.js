import React, { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blog, setBlog] = useState([
    { title: "My new website", body: "lorum ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorum ipsum...", author: "luigi", id: 2 },
    {
      title: "web dev top tips",
      body: "lorum ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <BlogList blog={blog} title="All blogs!" />
      <BlogList
        blog={blog.filter((blog) => blog.author === "mario")}
        title="Mario's blogs"
      />
    </div>
  );
};

export default Home;
