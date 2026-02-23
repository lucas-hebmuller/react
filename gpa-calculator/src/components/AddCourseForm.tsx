import { useForm } from "react-hook-form";
import { CourseFormData } from "../utils/types";

type AddCourseFormProps = {
  onAddCourse: (course: CourseFormData) => void;
};

function AddCourseForm({ onAddCourse }: AddCourseFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CourseFormData>();

  function onSubmit(data: CourseFormData) {
    onAddCourse(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="courseName">Course name: </label>
      <input
        type="text"
        id="courseName"
        placeholder="New course..."
        {...register("courseName", { required: "Course name is required!" })}
      />
      {errors.courseName && <p>{errors.courseName.message}</p>}

      <label htmlFor="grade">Grade: </label>
      <select
        id="grade"
        {...register("grade", { required: "Course grade is required!" })}
      >
        <option value=""></option>
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
      {errors.grade && <p>{errors.grade.message}</p>}

      <label htmlFor="credits">Credits: </label>
      <input
        type="number"
        id="credits"
        placeholder="Number of credits..."
        {...register("credits", {
          required: "Number of credits is required!",
          valueAsNumber: true,
        })}
      />
      {errors.credits && <p>{errors.credits.message}</p>}

      <button type="submit">Add Course</button>
    </form>
  );
}

export default AddCourseForm;
