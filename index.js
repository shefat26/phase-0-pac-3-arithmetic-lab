
function add(a,b){

    return a+b ;
    
}
add(4,3)

function subtract(a,b){

    return a-b;

}

subtract(6,2)



function multiply(a,b){

    return a*b ;
 
}
multiply(3,4)



function divide(a,b){

    return a / b ;

}
divide(4,2)



function increment(n){

    return n+1
}
increment(2)


function decrement(n){

    
    return n-1
}
decrement(5)



function makeInt(n){

    const parsed = parseInt(n, 10); 
    return isNaN(parsed) ? NaN : parsed
   
}
makeInt()




function preserveDecimal(n){

    let parsed = parseFloat(n) ;

    return isNaN(parsed) ? NaN : parsed ;
}
preserveDecimal()







