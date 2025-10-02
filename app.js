console.log("Hello World!\n==========\n");


// Exercise 1 Print Odds Continued
console.log("EXERCISE 1:\n==========\n");


function printOdds(count) {
    for  (let i = 0; i<= count; i++) {
        if ( i % 2 !== 0) { // Check if 'i' "isodd"
        
         console.log (i) ;
        }
    }
} 
printOdds(1);

// Exercise 2 Legal
console.log("EXERCISE 2:\n==========\n");
 
function checkAge() {
      
  let userName = "Guest"; 
  let age = 0;
  let aboveSixteen = `Congrats ${userName}, you can drive!`; 
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.` ;

  if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
       
  }
}
checkAge();

// Exercise 3 Which Quadrant 

console.log("EXERCISE 3:\n==========\n");


function whichQuadrant(x, y) {
  if (x === 0 && y === 0) {
    console.log("The point is at the origin.");
  } else if (x === 0 && y != 0) {
    console.log("The point lies on the y-axis.");
  } else if (y === 0 && x != 0) {
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
whichQuadrant(0, 1);

// Exercise 4//  What type of triangle

console.log("EXERCISE 4:\n==========\n");
   

   
function triangleType(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a){
    console.log("Invalid triangle"); 
  } else if ( a == b &&  a == c) {
    console.log("Equilateral triangle"); 
  } else if ((a == b && a != c)|| 
    (b == c && b != a) || 
    (c == a && c != b) 
  ) { 
    console.log("Isosceles triangle"); 
  } else {
    console.log("Scalene triangle");
  }
}

triangleType(42 ,24 ,30 );

function planStatus(planLimit, day, usage) {
  //planLimit /30 = x
  //usage /days

  let dailyUse = Math.round((usage / day) * 10 ** 2) / 10 ** 2;
  let dailyLimit = Math.round((planLimit / 30) * 10 ** 2) / 10 ** 2; //finding math.round(midpoint, 2) 
  let remain = day -30;

  if (dailyUse <= dailyLimit) {
    console.assert(`${day} days used, ${remain} days remaining. \n Average daily use ${dailyUse} GB/day, \n
      youre under/ at your daily limit`)  
  } else if (dailyUse > dailyLimit) {
      console.log(`${day}, days used, ${remain} days remaining. \n Average daily use ${dailyUse} GB/day, \n
        Youre exceeding your daily limit of ${dailyLimit} by ${
        Math.round(dailyLimit - dailyUse)}`
      );
  } 

}

planStatus(100, 15, 56);

