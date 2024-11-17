import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMarks }) => {
  return (
    <div className="w-1/3 bg-slate-100">
      <h2 className="text-2xl font-semibold ml-3">
        Bookmarked Blogs: {bookMarks.length}
      </h2>
      {bookMarks.map((bookmark) => (
        <BookMark key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
};
BookMarks.propTypes = {
  bookMarks: PropTypes.func,
};

export default BookMarks;
