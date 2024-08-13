let boy1 = "bhavishya";
let boy2 = "sanket";
let sentence = `boy1 is friend of boy2`; // string can be by double,single,back quote
let sentence2 = `${boy1} is friend of ${boy2}`; //this syntax add the variables created
// but remember not to forget backtick(above tab button) this method is called string interpolation
console.log(sentence);
console.log;
console.log(sentence2);

//let fruit1 = 'lenardo da'vinci'  this give error so we add escape sequence with backtick
let fruit2 = `lenardo da\n'vinci`;
/* different escape sequence
\n=>change line
\t=>tab
\r=> carriage return
should be inside double quote
*/
console.log(fruit2);

//string properties

let girl = "neha";
let boy = "bhavi";
let friend = "          daksh       ";
console.log(girl.length);
console.log(girl.toUpperCase());
console.log(girl.toLowerCase());
console.log(girl[2]); // array prints the number of character mentioned
console.log(girl.slice(2, 4)); // slice print starting from char-2 to char-3 ,last one not included
console.log(girl.slice(1)); // print all char from girl[1]

console.log(girl.replace("a", "u")); // replace the string with what you want

console.log(girl.concat(boy, " wow")); // can be written with + sign like
console.log(girl + boy + " wow");

console.log(friend); //check this and then check below
console.log(friend.trim()); // this trims all the emoty spaces from start nd end

//quick question- print string wirth help of loop
for (let a = 0; a < girl.length; a++) {
  console.log(girl[a]);
}
console.log("this is typped by loop");
