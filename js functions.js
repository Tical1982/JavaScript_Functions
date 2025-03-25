//Exercise 1: Print Odds Continued


function printOdds (count) {
    for  (let i = 1; i<= count; i++) {
        if ( i % 2 !== 0) { // Check if 'i'
         isodd
         console.log (i) ;
        }
    }
}


//Exercise 2: Legal
 
function checkAge(userName = "Guest", age = 0) {

}
let aboveSixteen = `Congrats ${userName}, you can drive!`;
let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16. ;

if (age >= 16) {
console.log(aboveSixteen);
} else {
 console.log(belowSixteen);
   }
 }


 



 // Exercise 3: Which Quadrant 

function whichQuadrant (x, y) {
 if (x === 0 && y === 0) {
   console.log("The point is at the origin.");
} else if (x === 0) {
console.log("The point lies on the y-axis.");
  } else if (y === 0) {
   console.log("The point lies on the x-axis.");
   } else if  (x > 0 &&  y > 0) {
    console.log("The point lies in Quadrant 1.");
   } else if (x < 0 && y > 0) {
     console.log("The point lies in Quadrant 2.");
   } else if (x < 0 && y < 0) {
    console.log("The point lies in Quadrant 3.");
   } else {
    console.log("The point lies in Quadrant 4.");
   }
}

// Exercise 4; What type of triangle

function triangleType(a,b,c) {
if (a+b <= c || a+c <= b || b+c <= a){
  return "Invalid triangle"; 
}
if ( a === b &&  b === c) {
return "Equilateral triangle"; 
} else if (a === b || a === c || b === c) { 
  return "Isosceles triangle"; 
} else {
   return "Scalene triangle";
  }
}
