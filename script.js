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
// let num2 = Number(prompt("enter num2 :"));
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

// let r = Number(prompt("enter radius of sphere :"));

// console.log(`r is ${r} , sphere area of suface ${4 * (22/7) * r**2}`);

// output:
// r is 7 , sphere area of suface 616

// 11- Find circumference and area of circle

// formula  Circumference of a Circle	C = 2 × π × r
// Area of a Circle	A = π × r**2

// let r = Number(prompt("enter radius of sphere :"));

// console.log(`r is ${r} , Circumference of a Circle ${2 * (22/7) * r} , Area of a Circle ${(22/7) * r**2}`);

// output:
// r is 8 , Circumference of a Circle 50.28 , Area of a Circle 201.14

// --------------------------------------------------------------IF ELSE Day 8 to 11-------------------------------------------------------------

// 12- Accept two numbers and print the greatest between them

// let num1 = Number(prompt("enter num1 :"));
// let num2 = Number(prompt("enter num2 :"));

// let ans = num1 > num2 ? num1 : num2;
// console.log(`num1 is ${num1} , num2 is ${num2}  , and greatest  number ${ans}`);

// output
// num1 is 10 , num2 is 25  , and greatest  number 25

// 13- Accept the gender from the user as char and print the respective greeting message
// Ex - Good Morning Sir (on the basis of gender)

// let gender = prompt("enter gender  :");

// if(gender == 'F' || gender == 'f' ){
//      console.log(`Good Morning Ma'am ${gender}`);
// }
// else if(gender == 'M'|| gender == 'm' ){
//     console.log(`Good Morning Sir ${gender}`);
// }
// else{
//     console.log(`invalid gender  ${gender}`);
// }

// output
// Good Morning Ma'am f


// 14- Extend the previous program and handle the wrong inputs.
//       Print Good Morning sir for input m or M & Good morning Maam for input F or f 
//       else print Wrong Input

//  same 13 

// 15- Accept an integer and check whether it is an even number or odd.

// let n = Number(prompt("enter number :"));

// if(n%2 == 0){
//      console.log(`even number is ${n} `);
// }
// else if(n%2 != 0){
//     console.log(`odd number is ${n} `);
// }
// else{
//     console.log(`invalid number is ${n} `);
// }

// output
// even number is 12 

// 16- Accept name and age from the user. Check if the user is a valid voter or not.
//       Vaid - Hello Shery, You are a valid voter.
//       Invalid - Sorry Shery, you can't cast the vote.
// 	Part 2 - Print after how many years the user will be eligible.


// let name = prompt("enter your name:");
// let age = Number(prompt("enter your age:"));


// if(age >= 18){
//      console.log(`Hello ${name}, You are a valid voter. your age is ${age}`);
// }
// else if(age < 18){
//     age = 18 - age;
//     console.log(`Sorry ${name}, you can't cast the vote, you will eligible after ${age} years`);
// }

// output
// Hello shivendra, You are a valid voter. your age is 22

// 17- Accept a day number between 1-7 and print the corresponding dayname.

// let day = Number(prompt("enter day name is:"));

// switch (day) {
//     case 1:
//         console.log(`${day} is Monday`);
//         break;
//     case 2:
//         console.log(`${day} is Tuesday`);
//         break;
//     case 3:
//         console.log(`${day} is Wednessday`);
//         break;
//     case 4:
//         console.log(`${day} is Thusday`);
//         break;
//     case 5:
//         console.log(`${day} is Friday`);
//         break;
//     case 6:
//         console.log(`${day} is Saturday`);
//         break;
//     case 7:
//         console.log(`${day} is Sunday`);
//         break;
//     default :
//         console.log(`${day} is invalid value`);
// }

// output
// 4 is Thusday

// 18- Accept three numbers and print the greatest among them

//  let num1 = Number(prompt("enter num1 is :"));
//  let num2 = Number(prompt("enter num2 is :"));
//  let num3 = Number(prompt("enter num3 is :"));

//  if(num1 > num2 && num1 > num3){
//      console.log(`num1 is greater number is ${num1}`);
//  }
//  else if(num2 > num1 && num2 > num3){
//     console.log(`num2 is greater number is ${num2}`);
// }
// else{
//     console.log(`num3 is greater number is ${num3}`);
// }

// output
// num3 is greater number is 18

// 19- Accept a year and check if it a leap year or not (google to find out what's a leap year)

// let year = Number(prompt("enter year  :"));

// if(year % 400 == 0){
//      console.log(`${year} is a leap year`);
// }else if(year % 4 == 0 && year % 100 !=0){
//     console.log(`${year} is a leap year`);
// }else{
//     console.log(`${year} is not a leap year`);
// }

// output
// 2024 is a leap year

// 22- Accept an english alphabet from user and check if it is a consonent or a vowel;

// let alpha = prompt("enter an english alphabet :");

// if(alpha =='A' || alpha =='E' || alpha =='I' || alpha =='O' || alpha =='U' || alpha =='a' || alpha =='e' || alpha =='i' || alpha =='o' || alpha =='u'){
//     console.log(`vowel is ${alpha}`);

// }
// else{
//     console.log(`consonent is ${alpha}`);
// }


// output
// vowel is A

// ------------------------------------------------------------------LOOPS Day 12 to 16---------------------------------------------------------------

// 23- Accept an integer and Print hello world n times

// let n = +prompt("enter an number :");

// for(let i =0 ; i< n;i++){
//     console.log("hello world");
// }

// output
// 3 hello world

// 24- Print natural number up to n. 

// let n = +prompt("enter an number :");


// for(let i =1 ; i<=n ;i++){
//     console.log(i);
// }

// output 
//  n=3
// 1
// 2
// 3 

// 25- Reverse for loop. Print n to 1.

// let n = +prompt("enter an number :");

// for(let i = n ; i>=1 ;i--){
//     console.log(i);
// }

// output 
//  n=3
// 3
// 2
// 1 

// 26- Take a number as input and print its table
// 5 * 1 = 5
// 5 * 2 = 10 ... up to 10 terms

// let n = +prompt("enter an number :");


// for(let i =1 ; i<=10 ;i++){
//     console.log(`${n} * ${i} = ${n*i}`);
// }

// output 
//  n=5
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50

// 27- Sum up to n terms.

// let n = +prompt("enter an number :");

// let sum =0;
// for(let i =1 ; i<=n ;i++){
//      sum +=i;
// }
// console.log("sum is ", sum);

// output 
//  n=5
// sum is 15

// 28- Factorial of a number

// let n = +prompt("enter an number :");
// let fac =1;
// for(let i =1 ; i<=n ;i++){
//      fac *=i;
// }
// console.log(`Factorial number of ${n} is ${fac}`);

// output 
// Factorial number of 5 is 120

//  29- Print the sum of all even & odd numbers in a range seperately.

// let n = +prompt("enter an number :");

// let sum_even =0 , sum_odd =0;

// for(let i =1 ; i<=n ;i++){
//     if(i%2 == 0){
//         sum_even += i
//     }
//     else if(i%2 != 0){
//         sum_odd += i
//     }
// }

// console.log(`sum of even number is ${sum_even} and sum of odd number is ${sum_odd}`);

// output 
//  n= 10
// sum of even number is 30 and sum of odd number is 25

// 30- Print all the factors of a number.


// let n = +prompt("enter an number :");

// for(let i =1 ; i<=n ;i++){
//     if(n%i == 0){
//         console.log(i);
//     }
// }

// output
//  n=10
// 1 
// 2
// 5
// 10

// 31- Print the sum of all factors of a number, 50 -> 1 + 2 + 5 + 10 + 25 = 43


// let n = +prompt("enter a number :");

// let sum =0;
// for(let i =1 ; i<n ;i++){
//     if(n%i == 0){
//         sum += i;

//     }
// }
// console.log("sum of all factors of a number",sum);

// output
//  n=50
// sum of all factors of a number 43

// 32- Check if the number is Prime or not.

// let n = +prompt("enter a number :");

// let temp = true;
// for(let i =2 ; i<=n/2 ;i++){
//     if(n%i == 0){
//       temp = false;
//       break;
//     }
// }

// console.log(temp==true ? "prime" : "not prime");

// output
//  n=12
// not prime

// 33- Write a program to take two inputs a, b & find the value of a  raised to the power of b. 
// 	Ex - a = 2, b = 5
// 	OP - 2^5 = 32


// let a = +prompt("enter a number :");
// let b = +prompt("enter b number :");

// console.log(Math.pow(a,b));

// output
//  32

// 34- Seprate each digit of a number and print it on the new line ex - 123 
// 	OP
// 		3
// 		2
// 		1


// let n = +prompt("enter a number :");
// let rem=0;
// while(n != 0){
//  rem = n%10;
//  n = Math.floor(n/10);
//  console.log(rem);
// }

// output
// 3
// 2
// 1

// 35- Sum of digits of a number, 936 = 18


// let n = +prompt("enter a number :");
// let sum=0;
// let rem=0;
// while(n != 0){
// rem = n%10;
//  sum = sum + rem;
//  n = Math.floor(n/10);

// }
// console.log(sum);
// output
// 18

// 36- Accept a number and print its reverse

// let n = +prompt("enter a number :");
// let rem=0;
// let ans=0;
// while(n != 0){
//  rem = n%10;
//  ans = (ans * 10) + rem;
//  n = Math.floor(n/10);

// }
// console.log(ans);

// output
// n= 12345
// 54321

// 37- Accept a number and check if it is a pallindromic number (If number and its reverse are equal)
// Ex - 12321 - Rerverse - 12321


// let n = +prompt("enter a number :");
// let val =n;
// let rem=0;
// let ans=0;
// while(n != 0){
//  rem = n%10;
//  ans = (ans * 10) + rem;
//  n = Math.floor(n/10);

// }
// console.log(val == ans ? "pallindromic": "not pallindromic");

// output
// n= 12345
// not pallindromic

// 38- Accept a number and check if it is a strong number or not (Sum of factorial of each digit)
//    Ex- 145 = 1! + 4! + 5! = 145

// let n = +prompt("enter a number :");
// let temp = n;
// let val = 0;
// function fun(v) {
//     let fac = 1;
//     for (let i = 1; i <= v; i++) {
//         fac *= i;
//     }
//     return fac;
// }


// let rem = 0;
// while (n != 0) {
//     rem = n % 10;
//     n = Math.floor(n / 10);
//     val = val + fun(rem);
    
// }
// // console.log(val);
// console.log(temp == val ? "strong number" : "not strong number");

// output
// 145
//  strong number


// 39- Automorphic number 5 = 25 = 625 = 390625, 6=36, 76 = 5776


let n = +prompt("enter a number :");
let sq = Math.pow(n,2)
console.log(sq);


let rem = 0;
let temp = true;
while (n != 0) {
     if(n % 10 != sq % 10){
        temp = false;
         break;
     }
    sq = Math.floor(sq / 10);
    n = Math.floor(n / 10);
}

console.log(temp ? "Automorphic": "not Automorphic");

// output
// Automorphic