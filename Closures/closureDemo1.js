/** 
 * 
 * Here , function fun() remembers the variable name even fun() is removed from the call stack 
 * The function fun () remembers the variable but not it's value . 
 */

function fun(name) {
    console.log("Inside fun");

    setTimeout(function fun() {
        console.log("Hai " , name);
    } , 4000);

    name = "Anvesh";

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
 * after 4 seconds Hai Anvesh will be printed 
 */