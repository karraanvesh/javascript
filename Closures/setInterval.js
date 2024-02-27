/**
 * setInterval is a function which expects two arguments
 * 1. task to be executed
 * 2. Time in milliseconds
 * It keeps on executing the task for every interval of time 
 * i.e., let us say the timer is 3 milli seconds , it keeps on executing
 * the task for every 3 milli seconds
 */

console.log("start");
setInterval(function exec() {
    console.log("task executed");
} , 3000);
console.log("end");

/**
 * Output :
 * start
 * end
 * after every 3 seconds task executed will be printed 
 */