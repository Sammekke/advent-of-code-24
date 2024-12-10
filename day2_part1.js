import fs from 'fs';

const data = fs.readFileSync('./input_day2.txt').toString().split('\n').map(row => row.match(/\w+/g));

let total = 0;

for (let i = 0; i < data.length - 1; i++) {
  if (isDecreasing(data[i]) || isIncreasing(data[i])) {
    total++;
  }
}

function isIncreasing(arr) {
  var prev, cur;

  for (var i = 0; i < arr.length; i++) {
    cur = +arr[i];
    if (i && cur !== prev && cur < prev) return false;
    if (i && cur-1 !== prev && cur-2 !== prev && cur-3 !== prev) return false;
    prev = cur;
  }

  return true;
}

function isDecreasing(arr) {
  var prev, cur;

  for (var i = 0; i < arr.length; i++) {
    cur = +arr[i];
    if (i && cur !== prev && prev < cur) return false;
    if (i && cur+1 !== prev && cur+2 !== prev && cur+3 !== prev) return false;
    prev = cur;
  }

  return true;
}

console.log(total)
