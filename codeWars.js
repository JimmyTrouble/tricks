let arr = [7,4,3,6];
let newArr = [];

let i = 0;
let arrayLength = arr.length;
while(i < arrayLength ) {
   console.log(arr[i])
    let indexValue = arr[i];

    if (indexValue <= newArr[i]) {

        newArr.unshift(arr[i])

    }
   i++;
   if (arr.length === newArr.length){
    break;
   }
}