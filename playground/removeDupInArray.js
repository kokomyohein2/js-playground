const array = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5];
const unique = [...new Set(array)];

console.log("before : ", array);
console.log("after : ", unique);
