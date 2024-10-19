let marks = [4, 53, 67]; //arrays are mutable , string is not
console.log(marks.length);
marks[3] = 54; // adding values
marks[2] = 0; //changing values
console.log(marks);
console.log(typeof marks); // object

//print array content with loop
for (let a = 0; a < marks.length; a++) {
  console.log(marks[a]);
}
console.log();
//array methods
//M-1= tostring
let num = [1, 3, 5, 63, 48, 11];
let method1 = num.toString();
console.log(method1);

console.log();

//M-2 = join method
let method2 = num.join("-"); //joiner
console.log(method2);

console.log();

//M-3=pop method
let method3 = num.pop(); // removes the last number and updates an array
console.log(num);
console.log(method3); // written popped item

console.log();

//m4- push
let method4 = num.push(8); // add element to last
console.log(num, method4);

console.log();

//m5- shift
let method5 = num.shift(); //remove first element
console.log(num, method5);

//m6- unshift
let method6 = num.unshift(4); // add element in first
console.log(num, method6);

console.log();

//m7- delete
let method7 = delete num[0];
console.log(num, num.length);

console.log();

//M8-concat
let num_again = [11, 12, 13, 14];
let method8 = num.concat(num_again);
console.log(method8); //joins both array but dont change original
let num_onceAgain = [0, 2, 4];
let method8_revise = num.concat(num_again, num_onceAgain);
console.log(method8_revise);

console.log();

//m9-sort
let compare = (a, b) => {
  return a - b; //if a-b=-ve so a,b is written , if +ve then b,a
};
num.sort(compare); //it changes original array alphabetically or with first digit
console.log(num);

//m10-reverse
num.reverse();
console.log(num);

console.log();

//m11&12- splice and slice
//splice =adds new items to array/removes item from specific place
//num.splice(from which index,how many digits,what to add instead)
num.splice(0, 2, 121, 122, 450); //0 index ,2 values, add 121,122 and 450
console.log(num);

//slice= takes out piece of array and it creates new array
let method11 = num.slice(2); //from which index to last
console.log(method11); //doesnt moddify old array
let method12 = num.slice(1, 3); //from where to where
console.log(method12);

//LOOPS IN ARRAY
console.log();
console.log();
console.log("loops in array started");

let number = [1, 4, 6, 8];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

number.forEach((Element) => {
  //can take upto 3 values inside function (value,index,array)
  console.log(Element * Element);
});

//array.from --for anything that can be converted into array
let name = "bhavishya";
let Arr = Array.from(name);
console.log(Arr);

//for...of ---shortcut for accessing values of array
for (let i of number) {
  console.log(i);
}

//for..in -- give keys of individual character in array
for (let item in number) {
  console.log(item);
}

//MAP FILTER REDUCE
console.log();
console.log();
console.log();
//new new new

let arr = [45, 88, 65];
let a = arr.map((value, index) => {
  console.log(value, index);
  return value + index + 2;
});
console.log(a);
//difference between <for each loop> and <map> is that map creates the copy of an original array and changes that

//array filter method
let arr2 = [10, 84, 65, 5, 1, 20];
let a2 = arr2.filter((b) => {
  return b < 30;
});
console.log(a2);

console.log();

//array reduce method
let arr3 = [1, 3, 5, 8, 6];
let a3 = arr3.reduce((h1, h2) => {
  return h1 + h2; // takes first two values of array and the result is run with third element then result with 4th
});
console.log(a3);


//this comment is added by rudraksha kushwaha