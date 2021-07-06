const students = [
  { name: "koko", age: 25, eye: "blue" },
  { name: "nge", age: 24, eye: "blue" },
  { name: "boo", age: 5, eye: "brown" },
  { name: "pp", age: 20, eye: "blue" },
  { name: "chanon", age: 3, eye: "black" },
  { name: "tiger", age: 2, eye: "black" },
  { name: "cowcow", age: 1, eye: "blue" },
  { name: "boohtwar", age: 4, eye: "gray" },
];

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
