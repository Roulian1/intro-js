/*MinMax google*/

let arr = [78,96,456,258,6,478];

console.log(Math.max(...arr));
console.log(Math.min(...arr));

/*google again*/

let arrayList = [1, 2, 3, 4, 3, 21, 0];
let max = arrayList[0];
for (let i = 1; i < arrayList.length; ++i) {
  if (arrayList[i] > max) {
    max = arrayList[i];
  }
}

console.log(max);