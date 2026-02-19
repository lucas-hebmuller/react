import { useState } from "react";

type Course = {
  id: number;
  courseName: string;
  grade: string;
};

function Home() {
  const [newCourse, setNewCourse] = useState<string>();
  const [coursesList, setCoursesList] = useState<Course[]>([]);

  function addCourse() {
    if (!newCourse) return;

    //const lastId = coursesList.length - 1
  }

  function deleteCourse(id: number) {
    setCoursesList((prev) => prev.filter((course) => course.id !== id));
  }

  return (
    <div>
      <h2>Semester</h2>
      <input
        type="text"
        placeholder="New course..."
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
      />
      <button onClick={addCourse}>Add Course</button>

      <ul>
        {coursesList.map((course, key) => (
          <li key={key}>
            {course.courseName}
            <button onClick={() => deleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
