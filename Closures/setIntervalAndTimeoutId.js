/**
 * setTimeout and setInterval returns a unique id and there is a
 * usecase for this id , let us say after sometime we don't want any task 
 * to be executed we can stop that task using this id and clearTimeout and 
 * clearInterval functions 
 */

console.log("start");
let x = setInterval(function fun() {
    console.log("task executed")
} , 5000);

let y = setTimeout(function gun() {
    console.log("Hello");
    clearInterval(x);
} , 20000);

console.log("end");

/**
 * Output :
 * start
 * end
 * after every 5 seconds task executed will be printed
 * after 20 seconds Hello will be printed and task executed will not be printed 
 */