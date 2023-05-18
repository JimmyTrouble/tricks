


let myString = "i went for a walk and it was nice"

//INDEXING

console.log("string index =",myString.indexOf("went"));

console.log("string index =",myString.indexOf("it"));

console.log("string index =",myString.indexOf("f"));

console.log("string index =", myString.indexOf( "i"));

console.log(myString.indexOf('z')); //dosent contain returns -1

//Slicing

console.log("slice index =" , myString.slice(8));

console.log("slice index =" , myString.slice(2, 7));

//Replacing

console.log("replacing =", myString.replace("walk", "run"))

//ADDing

console.log("adding =", myString.concat(" and pretty"));

//Adding to a new

let newString = myString.concat("and it was yum and pretty");
console.log("adding to a new (newString) =", newString);

//math inside strin (template literals) ` ${} `

console.log("math string =", `i owe you $${100 + 45}`);

//prims in string `${}`

let person = "John"
let age = "54"
console.log("prims in strings =", `${person} is ${age} old`);
