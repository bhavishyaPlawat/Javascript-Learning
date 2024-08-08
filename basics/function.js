/* function are made to make life easy by not typing same thing again and again and rather
writting it only one time and then just calling it by name to get the work done
*/

function sum(x,y){  //one way of writting function
    console.log("done")
    return x+y 
}

const add = (x,y)=>{ //another way of making function
    let z = x+y
    return z
}

const hello = ()=>{
    console.log("kesa hai bhai , mai to changa hu")
}

let a = 6
let b = 9
let c = 9
let d =1
console.log(sum(a,b))
let doubleSum= sum(a,b)+add(c,d)
console.log(doubleSum)
hello()
