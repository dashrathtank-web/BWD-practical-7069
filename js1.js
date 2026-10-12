let x=100,y=92;
let age = 19;
let price = 6000;
let gpa = 50.5;
let yourname = "Dashrath"
let online = false

console.log(`hello word`);
console.log(x);
console.log(`number is ${x}`);
console.log(y);
console.log(`Your age is ${age}`);
console.log(`it's price Rs.${price}`);
console.log(`your name is ${yourname}`);
console.log(`Are you Online? : ${online}`); 
console.log(typeof online); 
document.getElementById("p1").textContent = `Your name is ${yourname}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = ` Are you student ? : ${online}`