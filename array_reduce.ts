import { students } from "./Data";

const totalAgesOfAllStudent = students.reduce((acc, cur) => acc + cur.age, 0);

// console.log(totalAgesOfAllStudent);

// get total of eye colors
const studentsByEyeColor = students.reduce((acc, cur) => {
  const color = cur.eye;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});

// console.log(studentsByEyeColor);

// get total num of chars in name
const totalNumOfCharsInName = students.reduce((acc, cur) => acc + cur.name.length, 0);
console.log(totalNumOfCharsInName);
