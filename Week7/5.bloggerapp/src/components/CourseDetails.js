import React from "react";

const courses = [
  { id: 1, name: "Angular",date:"04-05-21" },
  { id: 2, name: "Reaact",date:"2025-01-01" },
  { id: 3, name: "MongoDB",date:"2025-01-01" },
  { id: 4, name: "Express.js",date:"2025-01-01" },
];

export default function CourseDetails() {
  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name} Date:{course.date}</li>
        ))}
      </ul>
    </div>
  );
}
