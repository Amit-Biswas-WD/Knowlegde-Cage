import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMarks, bookMin }) => {
  return (
    <div className="w-1/3">
      <h2 className="text-2xl font-semibold ml-3 my-6">
        Spent time on read : {bookMin}
      </h2>
      <div className="bg-slate-100 py-4">
        <h2 className="text-2xl font-semibold ml-3">
          Bookmarked Blogs: {bookMarks.length}
        </h2>
        {bookMarks.map((bookmark) => (
          <BookMark key={bookmark.id} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};
BookMarks.propTypes = {
  bookMarks: PropTypes.array,
  bookMin: PropTypes.number,
};

export default BookMarks;
