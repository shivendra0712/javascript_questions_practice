// ---------------------------------------------------------------BASICS Day 1 to 6-------------------------------------------------------------------------

// 1 - Sum of two integers

// let a =4;
// let b =5;
// console.log(a+b); 

// output:
//  9

// 2- Print the messege along with values and sum
// Ex - The sum of 45 & 12  = 57

// let a =45;
// let b =12;
//  console.log(` The sum of 45 & 12  = ${a+b}`); 
// console.log(" The sum of 45 & 12  = " +(a+b)); 
// console.log(" The sum of 45 & 12  = " ,(a+b)); 

// output:
//   The sum of 45 & 12 = 57

// 3- Accept two integers from user and print the sum
// 	Ex - The sum of 45 & 12 = 57

// let num1 = +prompt("enter num1 :");
// let num2 = +prompt("enter num2 :");

// console.log(` The sum of 45 & 12  = ${num1+num2}`);

// output:
//   The sum of 45 & 12 = 57

// 4- Accept the User's name, age and print in following manner
// 	Ex - Hello Shery, you are 12 years old.

// let name = prompt("enter your name :");
// let age = +prompt("enter your age :");

// console.log(` Hello ${name}, you are ${age} years old`);

// output:
// Hello Sherya, you are 12 years old

// 5- Solve Increment & decrement operator questions on
// https://javaconceptoftheday.com/quiz-on-increment-and-decrement-operators/



// 6- Accept two numbers from user and swap their values
// Part 2 - Swap without using third variable

// let num1 = Number(prompt("enter num1 :"));
// let num2 = Number(prompt("enter num1 :"));
// console.log("num1 is", num1);
// console.log("num2 is", num2);

// num1 = num1 + num2;
// num2 =  num1 - num2;
// num1 = num1 - num2;

// console.log("num1 is", num1);
// console.log("num2 is", num2);

// output:
// num1 is 10
// num2 is 20
// num1 is 20
// num2 is 10

// ---------------------------------------------------------------MATH CLASS Day 7------------------------------------------------------

// 7- Accept the length and width of a rectangle. Calculate & print the area and perimeter.

// let len = Number(prompt("enter length :"));
// let wid = Number(prompt("enter width :"));

//console.log(`len is ${len} and wid is ${wid}`);

// console.log("Area of rectangle ", (len * wid));

// console.log("Perimeter of rectangle ", 2*(len + wid));

// output:
// len is 2 and wid is 3
// Area of rectangle  6
// Perimeter of rectangle  10


// 8- Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

// formula CI = A – P
// A=P(1+(r/n))**nt

//  let p = Number(prompt("enter principal :"));
//  let r = Number(prompt("enter rate :"));
//  let t = Number(prompt("enter time :"));

//  let a = p*((1 + (r/100))**t);
//  let CI = a - p;

//  console.log(`p is ${p}, r is ${r},  t is ${t} ,and Compound Interest is ${CI}`);

// output:
// p is 25000 , r is 10 , t is 2 ,and Compound Interest is  5250


// 9- Accept the three sides of triangle and calculate the area using herons formula

// formula
// semi-perimeter, s = (a + b + c)/2;
// Area of triangle = √(s(s-a)(s-b)(s-c))

// let a = Number(prompt("enter triabgle first side :"));
// let b = Number(prompt("enter triabgle second side  :"));
// let c = Number(prompt("enter triabgle third side :"));

// let  s = (a+b+c)/2;
// let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

// console.log(`a is ${a} , b is ${b} , c is ${c} , and area of triangle is ${area}`);

// output:
// a is 5 , b is 6 , c is 9 , and area of triangle is 14.14

// 10- Find surface area of sphere

// formula sphere area of suface = 4πr**2
//  π = 22/7

let r = Number(prompt("enter radius of sphere :"));

console.log(`r is ${r} , sphere area of suface ${4 * (22/7) * r**2}`);

// output:
// r is 7 , sphere area of suface 616


