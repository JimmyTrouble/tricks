function multiplyBy(num){
    return (x) => {
        return x * num
    }
}

const triple = multiplyBy(3)// triple: (x: any) => number
triple(5) // 15



function inBetween(x,y){
    return (num) => {
        return (num >= x && num <= y)
    }
}

const between = inBetween(1,10)

between(4)
between(22)