const word = 'hel10';

//global ints
let text = word.match(/\d/g);

console.log(text);


//global chars
text = word.match(/\D/g);

console.log(text);