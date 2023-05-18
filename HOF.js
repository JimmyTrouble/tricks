// function funWrapper(callback){
//     callback('Called by wrapper')
// }

// funWrapper(sayHi)
// funWrapper(m => console.log(m))

// A higher order function is a function that takes a function as an argument,
//  or returns a function. They are commonly used in functional programming,
//  and are a powerful tool for abstracting away complexity.


//Function as argument
const add = (x ,y) => x + y

function getVal (fn){
   return fn;
}

console.log(getVal(add(3,4)))

//returning function
const sub = (x) => (y) => x - y

let subVal = sub(5)(3);

//CLOSURES and HOFs
//keeps stuff on the heap memory, not the stack
function encapsulatedState(x) {
    let state = 10;
     function x () {
      state += x;
      return state;
    }
    return x
  }

console.log(encapsulatedState(4)); 

