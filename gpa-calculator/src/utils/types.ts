export type Course = {
  id: number;
  courseName: string;
  grade: string;
  credits: number;
};

export type CourseFormData = Omit<Course, "id">;

export type Semester = {
  id: number;
  name: string;
  courses: Course[];
}