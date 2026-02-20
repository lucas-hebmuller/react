import { useState } from "react";
import { useForm } from "react-hook-form";

type Course = {
  id: number;
  courseName: string;
  grade: string;
  credits: number;
};

function Home() {
  const [coursesList, setCoursesList] = useState<Course[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function addCourse() {
    const lastId = coursesList.length > 0 ? coursesList[coursesList.length - 1].id : 0;

    setCoursesList((prev) => [
      ...prev,
      { id: lastId + 1, courseName: "Aaaaaaaaaaaa", grade: "Z", credits: 0 },
    ]);
  }

  function deleteCourse(id: number) {
    setCoursesList((prev) => prev.filter((course) => course.id !== id));
  }

  return (
    <div>
      <h2>Semester</h2>

      <form onSubmit={handleSubmit(addCourse)}>
        <label htmlFor="courseName">Course name: </label>
        <input
          type="text"
          id="courseName"
          placeholder="New course..."
          {...register("courseName", { required: "Course name is required!" })}
        />
        {errors.courseName && <p>{errors.courseName.message}</p>}

        <label htmlFor="grade">Grade: </label>
        <select id="grade" {...register("grade", {required: "Course grade is required!"})}>
          <option value="A">A</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="B-">B-</option>
          <option value="C+">C</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
        {errors.grade && <p>{errors.credit.message}</p>}

        <label htmlFor="credits">Credits: </label>
        <input
          type="number"
          id="credits"
          placeholder="Number of credits..."
          {...register("credits", {
            required: "Number of credits is required!",
          })}
        />
        {errors.credits && <p>{errors.credits.message}</p>}

        <button type="submit">Add Course</button>
      </form>

      <ul>
        {coursesList.map((course) => (
          <li key={course.id}>
            {course.courseName}
            <button onClick={() => deleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
