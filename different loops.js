let arr = ['🍔', '🧠', '🐕'];



for(const i of arr){
        console.log(i);
}

arr[Symbol.iterator] = function(){
    let i = 0;
    let arr = this;
    return{
        next: function(){
            if(i >= arr.length){
                return {done: true};
            } else{
                const value = arr[i] + ' 🐵';
                i ++;
                return {value, done: false};
            }
        }
    };
};


for (const e of arr){
    console.log(e);
}