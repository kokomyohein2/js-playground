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

const allBlueEyes = students.every((student) => student.eye === "blue");
// console.log(allBlueEyes);

const allYoung = students.every((student) => student.age < 30);
console.log(allYoung);
