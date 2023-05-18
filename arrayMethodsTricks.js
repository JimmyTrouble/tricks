let arr = [1,2,3,4]

//map
console.log(
arr.map((x) => x += 1)
)
//filter
arr.filter((x) => x < 3)

//reduce
arr.reduce((sum, x) => sum += x)

//includes
arr.includes(3)

//sort
arr.sort((a,b) => a - b)

//from
Array.from({length: 4}, (_,i) => i += 1)

//spread
let nArr = [...Array(5)].map((_,i) => 'foo')

//fill
let arr2 = Array(4).fill(0).map((_,i)=> i += 1 )

//spread keys
let arr3 = [...Array(4).keys()]

//unique spread
let uniqpue = [...new Set(arr)]

//for each
arr.forEach(e => console.log(e))

//for of with index
for(const[i, val] of arr.entries()){
    
}
