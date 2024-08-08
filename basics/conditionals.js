//question1 chapter 2
let age = 5;
if (age >= 10 && age <= 20) {
  console.log("the age is between 10 and 20");
} else if (age < 10) {
  console.log("your age is less than 10");
} else if (age > 20) {
  console.log("your age is more than than 20");
}
console.log();
//question2 chapter 2
let umar = 20;

switch (true) {
  case umar >= 10 && umar <= 20:
    console.log("teri umar 10 aur 20 ke beech mein hai");
    break;

  case umar < 10:
    console.log("tu 10 saal se chota hai");
    break;

  case umar > 20:
    console.log("bhai 20 se bada ho gya hai tu");
    break;
}

console.log();

//question 3 & 4 chapter 2
let number = 11;
if (number % 2 == 0 && number % 3 == 0) {
  console.log("number is divisible by both 2 and 3");
} else if (number % 2 == 0) {
  console.log("this is divisible by 2");
} else if (number % 3 == 0) {
  console.log("this is divisible by 3");
} else if (number % 2 == 1 && number % 3 != 0) {
  console.log("number is odd but not a multiple of 3");
}
console.log();

//question 5 chapter 2
let drivingAge = 16;
console.log(
  drivingAge >= 18
    ? console.log("you can drive car")
    : console.log("you cannot drive car")
);

//example ternary operator(?)
a = 10;
b = 11;
let c = a > b ? a - b : b - a;
console.log(c);

/* translates to
if (a>b){
let c= a-b
} 
else {
let c = b-a
}
*/
