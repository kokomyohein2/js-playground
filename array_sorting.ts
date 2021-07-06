import { students } from "./Data";

const sortedStudentByName = students.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
});

const sortedStudentByAge = students.sort((a, b) => a.age - b.age);

// console.log(sortedStudentByName);
// console.log(sortedStudentByAge);
