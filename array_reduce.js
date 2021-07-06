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

const totalAgesOfAllStudent = students.reduce((acc, cur) => acc + cur.age, 0);

// console.log(totalAgesOfAllStudent);

const studentsByEyeColor = students.reduce((acc, cur) => {
  const color = cur.eye;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});

console.log(studentsByEyeColor);
