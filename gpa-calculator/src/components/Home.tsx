import { useState, useEffect } from "react";
import AddCourseForm from "./AddCourseForm";
import {
  calculateCumulativeGPA,
  calculateTermGPA,
} from "../utils/gpaCalculations";
import type { CourseFormData, Semester } from "../utils/types";

function Home() {
  const [semesters, setSemesters] = useState<Semester[]>(() => {
    const saved = localStorage.getItem("semesters");
    return saved
      ? JSON.parse(saved)
      : [{ id: 1, name: "Semester 1", courses: [] }];
  });

  useEffect(() => {
    localStorage.setItem("semesters", JSON.stringify(semesters));
  }, [semesters]);

  function addCourse(semesterId: number, newCourse: CourseFormData) {
    setSemesters((prev) =>
      prev.map((semester) => {
        if (semester.id !== semesterId) return semester;

        const lastId =
          semester.courses.length > 0
            ? semester.courses[semester.courses.length - 1].id
            : 0;

        return {
          ...semester,
          courses: [...semester.courses, { id: lastId + 1, ...newCourse }],
        };
      }),
    );
  }

  function deleteCourse(semesterId: number, courseId: number) {
    setSemesters((prev) =>
      prev.map((semester) => {
        if (semester.id !== semesterId) return semester;

        return {
          ...semester,
          courses: semester.courses.filter((course) => course.id !== courseId),
        };
      }),
    );
  }

  function addSemester() {
    const lastId =
      semesters.length > 0 ? semesters[semesters.length - 1].id : 0;
    setSemesters((prev) => [
      ...prev,
      { id: lastId + 1, name: `Semester ${lastId + 1}`, courses: [] },
    ]);
  }

  return (
    <div className="container">
      <h3 className="gpa-display">
        Cumulative GPA: {calculateCumulativeGPA(semesters)}
      </h3>

      {semesters.map((semester) => (
        <div className="semester-card" key={semester.id}>
          <h2>{semester.name}</h2>
          <h4 className="gpa-display">
            Term GPA: {calculateTermGPA(semester.courses)}
          </h4>

          <AddCourseForm
            onAddCourse={(course) => addCourse(semester.id, course)}
          />

          <ul>
            {semester.courses.map((course) => (
              <li key={course.id}>
                {course.courseName} • {course.grade} • {course.credits} credits
                <button
                  className="btn-danger"
                  onClick={() => deleteCourse(semester.id, course.id)}
                >
                  &#x1F5D1;
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <button onClick={addSemester}>Add Semester</button>
    </div>
  );
}

export default Home;
