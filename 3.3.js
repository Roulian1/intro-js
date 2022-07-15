/*Using Modern ES6 Spread Operator*/

let arr1 = [1,2,3,440,5,6];

let clone1 = [...arr1];

console.log(clone1);


/*Using Slice*/

let arr2 = [2,3,5,9];

let clone2 = arr2.slice();

console.log(clone2);


/*Using Concat*/

let arr3 = [9,8,7,6,5,4];

let clone3 = [].concat(arr3);

console.log(clone3);


/*Using fonction for*/


arr = [1, 2, 5];
arrCopy = [];

for (i = 0; i < arr.length; i++) {
  arrCopy[i] = arr[i];
}

console.log(arrCopy);