/*
 create a business name generator by combining 
 list of adjectives and shop name and 
 another word

adjectives: crazy,Amazing , Fire
Shop Name: Engine,fod,garmets
Another word: Bros,limited,hub
 
cannot use array
*/

const adj = {
  1: "crazy",
  2: "Amazing",
  3: "Fire",
};
const shopName = {
  1: "Engine",
  2: "Food",
  3: "Garments",
};
const anotherWord = {
  1: "Bros",
  2: "Limited",
  3: "Hub",
};

let randomIndex = Math.floor(Math.random() * 3) + 1;

console.log(
  "Business Name is " + adj[randomIndex],
  shopName[randomIndex],
  anotherWord[randomIndex]
);
