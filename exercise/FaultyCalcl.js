/*Question-create a faulty calculator using javascript

this faulty calculator does
1. take 2 number input from user
2. it performs wrong operation as follow
   + --> -
   - --> /
   * --> +
   / --> **(exonential)

   errors will be made only 10% of times ,90% correct calculator

*/
let FirstNum = prompt("enter 1st number");
let SecNum = prompt("enter 2nd number");
let operator = prompt("enter any operation + , - , / , * .");
console.log("you have entered " + FirstNum + " " + operator + " " + SecNum);

const FaultyCalc = (FirstNum, SecNum) => {
  if ((operator = "+")) {
    return parseInt(FirstNum) - parseInt(SecNum);
  } else if ((operator = "*")) {
    return parseInt(FirstNum) + parseInt(SecNum);
  } else if ((operator = "-")) {
    return parseInt(FirstNum) / parseInt(SecNum);
  } else if ((operator = "/")) {
    return parseInt(FirstNum) ** parseInt(SecNum);
  }
};

const correctCalc = (FirstNum, SecNum) => {
  if ((operator = "+")) {
    return parseInt(FirstNum) + parseInt(SecNum);
  } else if ((operator = "*")) {
    return parseInt(FirstNum) * parseInt(SecNum);
  } else if ((operator = "-")) {
    return parseInt(FirstNum) - parseInt(SecNum);
  } else if ((operator = "/")) {
    return parseInt(FirstNum) / parseInt(SecNum);
  }
};

if (Math.random() < 0.1) {
  FaultyCalc(FirstNum, SecNum);
} else {
  correctCalc(FirstNum, SecNum);
}
