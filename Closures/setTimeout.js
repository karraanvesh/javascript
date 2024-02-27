/**
 * setTimeout is a function which expects two arguments
 * 1. task to be executed
 * 2. Time in milliseconds
 * It will execute the task only once , once the timer is done 
 */

function fun() {
    console.log("Inside fun");

    setTimeout(function exec() {
        console.log("task executed");
    } , 5000);

    console.log("Leaving fun");
}

console.log("start");
fun();
console.log("end");

/**
 * Output : 
 * start
 * Inside fun
 * Leaving fun
 * end 
 * after 5 seconds task executed will be printed 
 * 
 * Justification : By default js is synchronous in nature i.e., it will executed only 
 * those which are natively known to it , while executing the program if it encounters 
 * anything which is natively not known to it , it will handover that task to the 
 * runtime and proceeds with the normal execution . Here , setTimeout() is natively 
 * not known to the js , so it will handover this task to the runtime and proceeds with 
 * the normal execution . 
 * so that is the reason 
 * start 
 * Inside fun
 * Leaving fun
 * end 
 * are printed first . Now the question is when this task will be executed . 
 * We need to know few things to know when and how this task is executed . 
 * 
 * Event queue : All the tasks which are natively not known to the js , will be 
 * residing in this queue and they will be executed one by one one's event loop
 * condition is true . 
 * 
 * Event loop : It is a infinite loop which keeps on checking for a couple of conditions
 * 1. Call stack must be empty
 * 2. Global code is done 
 * One's these two conditions are true it will return true .
 * 
 * After end is printed the call stack is empty and global code is also done , 
 * so after 5 seconds it will pick exec() from event queue and executes it .
 */