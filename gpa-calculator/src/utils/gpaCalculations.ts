import type { Course, Semester } from "./types";

const gradePoints: Record<string, number> = {
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  D: 1.0,
  F: 0.0,
};

export function calculateTermGPA(courses: Course[]): number {
  if (courses.length === 0) return 0;

  const totalPoints = courses.reduce((sum, course) => {
    return sum + (gradePoints[course.grade] ?? 0) * course.credits;
  }, 0);

  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

  if (totalCredits === 0) return 0;

  return Math.round((totalPoints / totalCredits) * 100) / 100;
}

export function calculateCumulativeGPA(semesters: Semester[]): number {
  const allCourses = semesters.flatMap((semester) => semester.courses);
  return calculateTermGPA(allCourses);
}
