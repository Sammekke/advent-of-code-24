import fs from 'fs';

const data = fs.readFileSync('./input.txt').toString().split('\n').map(row => row.match(/\w+/g));

const list1 = [];
const list2 = [];

for (let i = 0; i < data.length -1; i++) {
  list1.push(data[i][0]);
  list2.push(data[i][1]);
}

list1.sort();
list2.sort();

let total = 0;

for (let i = 0; i < list1.length; i++) {
  if (list1[i] >= list2[i]) {
    total += list1[i] - list2[i];
  } else {
    total += list2[i] - list1[i];
  }
}

console.log(total);
