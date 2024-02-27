/**
 * If the current folder contains package.json file with "type" : "module" 
 * then , all the files with .js as extension are bound to follow es6 module standards 
 * Earlier inorder to use module.exports in SearchingAlgo file we modified the 
 * file extension from .js to .cjs since module.exports is allowed in commonjs moduling only . 
 * But , instead of renaming the file we can just export all the functions and variables 
 * using export default and import from other file and use them 
 */
import Searching from "./SearchingAlgo.js";

let arr = [1 , 2 , 3 , 4 , 5 , 6 ];
let target = 1;
console.log(Searching.linear(arr , target) , Searching.binary(arr , target));