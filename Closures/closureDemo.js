/**
 * Closure : Closure is nothing but a function remembers it's lexical scoping even that function 
 * is removed from call stack . 
 * 
 * Here , function fun() remembers the variable name even fun() is removed from the call stack 
 */

function fun(name) {
    console.log("Inside fun");

    setTimeout(function fun() {
        console.log("Hai " , name);
    } , 4000);

    console.log("Leaving fun");
}

console.log("start");
fun("Sanket");
console.log("end");

/**
 * Output :
 * start
 * Inside fun
 * Leaving fun
 * end
 * after 4 seconds Hai Sanket will be printed 
 */