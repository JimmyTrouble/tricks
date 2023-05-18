// named function declaration

//console.log(addNums(5,6)); // can be called before addNums is reached
function addNums(a, b){
    const sum =  a + b;
    // task, side effect
    // return
    return sum;
}




 // function expression (use a function as a value)

//console.log(sum(5,6)); <= that would trogh an error 
//because the expression hasnt been created until it reaches that 
//code in the script (not hoisted)

// with emoji strings
const makeBread = function(qty){
    return '🍞'.repeat(qty);
}
makeBread(5);


//arrow functions
const makeWine = (qty) => '🍷'.repeat(qty);
console.log(makeWine(2));

//arrow functions with arguments
const makeBurger = () => '🍔'.repeat(4);
console.log(makeBurger());

