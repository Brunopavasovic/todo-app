const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((number, idx) => number * number);

const zbroj = numbers.reduce((sum, number, idx) => {
  console.log("SUM: ", { sum, number, idx });

  return sum + number;
}, 0);

const items = [
  {
    id: "4392061f1d623",
    content: "Work",
    done: false,
  },
  {
    id: "a6003fa1a959b",
    content: "Test",
    done: false,
  },
  {
    id: "90bb86ea539b6",
    content: "Test drugi",
    done: true,
  },
];

const statsExample = { done: 1, active: 2, all: 3 };

items.reduce(
  (stats, item) => {
    console.log("Stats: ", { stats, item });
    let { done, active, all } = stats;
    all += 1;
    if (item.done) {
      done += 1;
    } else {
      active += 1;
    }

    return { done, active, all };
  },
  { done: 0, active: 0, all: 0 }
);

function filter(inArr, callback) {
  const outArr = [];

  for (let i = 0; i < inArr.length; i++) {
    const inItem = inArr[i];
    const shouldKeep = callback(inItem, i);
    if (shouldKeep) {
      outArr.push(inItem);
    }
  }

  return outArr;
}

filter(numbers, (num) => num % 2 === 0);

function map(inArr, callback) {
  const outArr = [];

  for (let i = 0; i < inArr.length; i++) {
    const inItem = inArr[i];
    const outItem = callback(inItem, i);
    outArr.push(outItem);
  }

  return outArr;
}

function reduce(inArr, callback, initial) {
  let outVal = initial;

  for (let i = 0; i < inArr.length; i++) {
    const inItem = inArr[i];
    outVal = callback(outVal, inItem, i);
  }

  return outVal;
}

reduce(
  numbers,
  (sum, number, idx) => {
    console.log("SUM: ", { sum, number, idx });

    return sum + number;
  },
  0
);
