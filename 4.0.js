/*Working with a rectangle*/

let n = Number(prompt("Give strict number of the lenght in cm of a rectangle"));
let a = Number(prompt("Give strict number of the width in cm of this rectangle"));

function calcSurface(n,a) {
    return n*a;
}

alert("The surface of this rectangle is "+ calcSurface(n,a)+"cm² !");
console.log("The surface of this rectangle is "+ calcSurface(n,a)+"cm² !");