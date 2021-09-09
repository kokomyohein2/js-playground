import { students } from "./Data";

const blueEye = students.some((student) => student.eye === "blue");

console.log(blueEye);
