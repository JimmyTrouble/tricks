const nestedArr = [];
// ADD CODE HERE
let subArrayLength = 5;

for(let i = 0; i < subArrayLength; i++){
    nestedArr.push(`loop${i} ${i}`)
    console.log(i)
}

console.log(nestedArr);