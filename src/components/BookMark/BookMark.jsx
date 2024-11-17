import PropTypes from "prop-types";

const BookMark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white rounded-lg m-6">
      <p className="p-4 text-lg font-normal">{title}</p>
    </div>
  );
};

BookMark.propTypes = {
  bookmark: PropTypes.func,
};

export default BookMark;
