let obj = {

    h3llo : 9
}


let you = 'y0u';

obj[you] = 5;


console.log(obj);

const sortable = Object.fromEntries(
    Object.entries(obj).sort(([,a],[,b]) => a-b)
);

console.log(Object.keys(sortable));





