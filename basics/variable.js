const accountID = 1445;
let accountEmail = "tobhavi@gmail.com";
var accountPasssord = "12340";
accountCity = "delhi";

// accountID = 234;
//constant cannot be changed later ,node will reject it

accountEmail = "lalteshsingh@gmail.com";
accountPasssord = "564";
accountCity = "mumbai";
console.table([accountEmail, accountID, accountPasssord, accountCity]);

/*
const cannot be changed later it gets fixed
'let' makes block scope variable so it is mostly used
var is globally scoped if changed anywhere changed in overall

PRIMITIVE DATA TYPES
1.null
2.number
3.string
4.symbol
5.undefined
6.boolean
7.bigint
 */

let x = "bhavi";
let y = 20;
let z = 1.56;
const p = true;
let q = undefined;
let r = null;
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

//type of null=object coz it was made very earlier and cant be changed now

//object
let o = {
  naam: "bhavi",
  age: 20,
  city: "indirapuram",
};
console.log(o, typeof o);
o.salary = "10000cr"; //update object
console.log(o);
o.salary = "300cr";
console.log(o);
