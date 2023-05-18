const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };

const objToArray = Object.values(checkObj);

let divBy6 = false;

for(let index of objToArray){
    if(index % 6 === 0){
        divBy6 = true;
    }
}

console.log(divBy6);

