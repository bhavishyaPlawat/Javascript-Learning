let FirstNum = prompt("enter 1st number");
let SecNum = prompt("enter 2nd number");
let operator = prompt("enter any operation + , - , / , * .");
console.log("you have entered " + FirstNum + " " + operator + " " + SecNum);

if ((operator = "+")) {
  console.log(parseInt(FirstNum) - parseInt(SecNum));
} else if ((operator = "*")) {
  console.log(parseInt(FirstNum) + parseInt(SecNum));
} else if ((operator = "-")) {
  console.log(parseInt(FirstNum) / parseInt(SecNum));
} else if ((operator = "/")) {
  console.log(parseInt(FirstNum) ** parseInt(SecNum));
}
