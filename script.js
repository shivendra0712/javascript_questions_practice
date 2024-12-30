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

let num1 = Number(prompt("enter num1 :"));
let num2 = Number(prompt("enter num1 :"));
console.log("num1 is", num1);
console.log("num2 is", num2);

num1 = num1 + num2;
num2 =  num1 - num2;
num1 = num1 - num2;

console.log("num1 is", num1);
console.log("num2 is", num2);

// output:
// num1 is 10
// num2 is 20
// num1 is 20
// num2 is 10









