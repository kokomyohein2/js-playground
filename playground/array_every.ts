import { students } from "./Data";

const allBlueEyes = students.every((student) => student.eye === "blue");
console.log(allBlueEyes);

const allYoung = students.every((student) => student.age < 30);
console.log(allYoung);
