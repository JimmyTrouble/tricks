class foo{
    constructor(a , b , arr){
        this.a = a;
        this.b = b;
        this.arr = arr;
    }
}

let bar = new foo('i' , 'j', [1,2,3,4]);


console.log(bar);

for (const ele in bar){
    console.log(bar[ele]);
}