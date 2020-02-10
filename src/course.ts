export enum Course {
  Science = "Science",
  Commercial = "Commercial",
  Arts = "Arts"
}

export enum subjects {
  Physics = "Physics",
  Chemistry = "Chemistry",
  Shona = "Shona",
  Geography = "Geography",
  History = "History",
  Accounts = "Accounts",
  Business = "Business",
  Commerce = "Commerce",
  Maths = "Maths",
  Biology = "Biology",
  Literature = "Literature"
}

type SubjectCourses = { [key in Course]: Array<subjects> };

const SubjectCourseMap: SubjectCourses = {
  [Course.Commercial]: [
    subjects.Accounts,
    subjects.Maths,
    subjects.Business,
    subjects.Commerce,
    subjects.Geography
  ],
  [Course.Arts]: [subjects.History, subjects.Geography, subjects.Shona],
  [Course.Science]: [subjects.Maths, subjects.Physics, subjects.Chemistry]
};

export function CourseSubjects(course: Course): Array<subjects> {
  return SubjectCourseMap[course];
}
