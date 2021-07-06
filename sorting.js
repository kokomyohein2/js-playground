const students = [
  { name: "koko", age: 25 },
  { name: "nge", age: 24 },
  { name: "boo", age: 5 },
  { name: "pp", age: 20 },
  { name: "chanon", age: 3 },
  { name: "tiger", age: 2 },
  { name: "cowcow", age: 1 },
  { name: "boohtwar", age: 4 },
];

const sortedStudentByName = students.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
});

const sortedStudentByAge = students.sort((a, b) => a.age - b.age);

console.log(sortedStudentByName);
console.log(sortedStudentByAge);
