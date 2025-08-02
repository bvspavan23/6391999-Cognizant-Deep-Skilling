import { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [show, setShow] = useState("book");

  const renderComponent = () => {
    switch (show) {
      case "book":
        return <BookDetails />;
      case "blog":
        return <BlogDetails />;
      case "course":
        return <CourseDetails />;
      default:
        return <p>Select an option above</p>;
    }
  };

  return (
    <div className="App">
      <h1>📘 Blogger App</h1>
      <div>
        <button onClick={() => setShow("book")}>Book</button>
        <button onClick={() => setShow("blog")}>Blog</button>
        <button onClick={() => setShow("course")}>Course</button>
      </div>
      <hr />
      {show === "book" && <p>You selected Book Details</p>}
      {show === "blog" ? <p>Blog selected</p> : null}
      {show === "course" && <p>Course selected</p>}
      {renderComponent()}
    </div>
  );
}

export default App;
