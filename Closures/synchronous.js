function fun() {
    console.log("Inside fun");

    for(let i = 0 ; i < 1000000000 ; i++) {
        // some imp
    }

    console.log("leaving fun");
}
console.log("start");
fun();
console.log("end");

/**
 * Output :
 * start
 * Inside fun
 * some halt  ( to finish the for loop iterations )
 * leaving fun
 * end
 */