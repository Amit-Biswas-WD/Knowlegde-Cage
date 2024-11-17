import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookMark, handleAddToBookMin }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      Blogs: {blogs.length}
      {blogs.map((blog) => (
        <Blog
          handleAddToBookMark={handleAddToBookMark}
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookMark: PropTypes.func,
};

export default Blogs;
