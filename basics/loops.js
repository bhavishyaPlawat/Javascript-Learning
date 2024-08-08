//for loop
// let factorial = 1
// let n = prompt("enter a number to get its factorial")
// n = Number.parseInt(n)
// for (let i = n; i > 0; i--) {  //for loop
//   factorial *= i
// }
// console.log(factorial)

//'for IN loop' print out keys of the values given
let a = "bhavishya"; //example-1
for (let b in a) {
  console.log(b);
}

console.log();

let dict = {
  //example-2
  garrulous: "person who is ready to fight",
  reticent: "silent",
  slander: "abusive language",
  deadlock: "stand still",
  novice: "new learner",
  yakka: "hard work",
};
for (let key in dict) {
  console.log("meaning of " + key + " is " + dict[key]);
}

console.log();

//for OF loop
for (let letter of a) {
  console.log(letter);
}

console.log();

//while loop
let i = 0; //example-1
while (i <= 10) {
  console.log(i);
  i++;
}

console.log();
//example-2
let sum = 0;
let n = 3; //prompt("enter number to get sum of first natural numbers")
//n = Number.parseInt(n)
let c = 0;
while (c <= n) {
  sum += c;
  c++;
}
console.log("sum of first " + n + " natural numbers is " + sum);

console.log(); //DO WHILE LOOP

let d = 12; //example-1
do {
  console.log(d);
  d++;
} while (d < 10);

/* difference between while loop and do while loop is just that 

   while loop - checks condition if pass then executes , fails then stops
   do while loop - first executes then checks the condition so even if condition fails 
   execution will be done atleast 1 time 
  */
