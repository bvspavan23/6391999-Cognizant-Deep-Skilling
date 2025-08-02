const courses = ["React", "Node.js", "MongoDB", "Express"];

export default function CourseList() {
  return (
    <div>
      <h3>Course List:</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li> // use of keys
        ))}
      </ul>
    </div>
  );
}
