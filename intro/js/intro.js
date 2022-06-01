function sum(a,b) {
    return a+b;
}
//-------------------------------------------------------------------------------
// A function of first order is all the function that can be trate like a variable


// we save the results 
let res = sum (1,2)
console.log(res)

// we resign the functionality of the function into fsum
const fsum = sum;
res = fsum(5,6)
console.log(res)

//-------------------------------------------------------------------------------
// A function of superior order is that can receive for parameters different functions
function operation(fn, a, b) {
    console.log('se hace algo')
    console.log(fn(a,b))  
}

operation(sum, 1, 6)

//--------------------------------------------------------------------------------
// Arrow function 
let fA = () => {
    console.log('algo')
}

// An example input an arrow function into a superior order function
operation((a,b)=> a*b, 5, 5)

fA()