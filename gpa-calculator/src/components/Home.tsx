import { useState } from "react";
import AddCourseForm from "./AddCourseForm";
import {
  calculateCumulativeGPA,
  calculateTermGPA,
} from "../utils/gpaCalculations";
import { CourseFormData, Semester } from "../utils/types";

function Home() {
  const [semesters, setSemesters] = useState<Semester[]>([
    { id: 1, name: "Semester 1", courses: [] },
  ]);

  return (
    <div>
      <h2>Semester</h2>

      <ul>
        {coursesList.map((course) => (
          <li key={course.id}>
            {course.courseName} — {course.grade} — {course.credits} credits
            <button onClick={() => deleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
