import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddToBookMark, handleAddToBookMin }) => {
  const {
    title,
    cover,
    author,
    author_image,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  console.log(blog);
  return (
    <div>
      <div className="w-[845px] h-[450px]">
        <img
          className="w-full h-full object-cover"
          src={cover}
          alt="Descriptive image text"
        />
      </div>
      <div className="flex justify-between items-center my-6">
        <div className="flex gap-8 items-center">
          <div>
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={author_image}
              alt="image"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <span>0{reading_time} min read</span>
          <button onClick={() => handleAddToBookMark(blog)}>
            <FaRegBookmark />
          </button>
        </div>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="my-4">
        {hashtags.map((hash, index) => (
          <span key={index}> {hash} </span>
        ))}
      </p>
      <div className="my-4">
        <button
          className="underline text-green-800"
          onClick={() => handleAddToBookMin(reading_time)}
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func,
  handleAddToBookMin: PropTypes.func,
};

export default Blog;
