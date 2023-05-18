//pick num 1 - 10
let diceRoll = (Math.floor(Math.random() * 6)+1);
console.log(diceRoll);


switch(diceRoll){
    case 1:
        console.log("one"); 
        break;        
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
        break;
    case 6:
        console.log("six");
        break;
    
        default:
            console.log("invalid number");
}

switch(diceRoll){
    case 1:
    case 2:
    case 3:
        console.log("<= 3")
        break;
    case 4:
    case 5:
    case 6:
        console.log(">= 3")
        break;
}
