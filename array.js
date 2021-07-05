const text =
  "Once you have the array, you could rebuild the object from the array in the order you like, thus achieving exactly what you set out to do. That would work in all the browsers I know of, but it would be dependent on an implementation quirk, and could break at any time. You should never make assumptions about the order of elements in a JavaScript object.";

const words = text.replace(/,/g, "").replace(/\./g, " ").split(" ");

const wordWithCount = {};

words.forEach((s) => {
  if (wordWithCount[s]) {
    wordWithCount[s] += 1;
  } else {
    wordWithCount[s] = 1;
  }
});

const sortedAndCountedWords = {};

for (const [key, value] of Object.entries(wordWithCount)) {
  if (sortedAndCountedWords[value]) {
    // console.log(`${key}: ${value}`);

    const list = sortedAndCountedWords[value];
    list.push(key);
    list.sort();
    sortedAndCountedWords[value] = list;
  } else {
    sortedAndCountedWords[value] = [key];
  }
}
// console.log(sortedAndCountedWords);

let result = [];

for (const [key, value] of Object.entries(sortedAndCountedWords)) {
  //   console.log(value);
  result = result.concat(value);
}

console.log(result);
