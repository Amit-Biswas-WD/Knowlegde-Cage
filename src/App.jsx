import { useState } from "react";
import Blogs from "./components/Header/Blogs/Blogs";
import Header from "./components/Header/Header";
import BookMarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [bookMin, setBookMin] = useState(0);

  const handleAddToBookMark = (blog) => {
    const newBookMark = [...bookMarks, blog];
    setBookMarks(newBookMark);
  };

  const handleAddToBookMin = (min) => {
    console.log("Add to Min");
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="md:flex gap-8">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleAddToBookMin={handleAddToBookMin}
        />
        <BookMarks bookMarks={bookMarks} />
      </div>
    </div>
  );
}

export default App;
