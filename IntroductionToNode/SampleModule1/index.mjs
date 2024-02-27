/**
 * If the current folder contains package.json file 
 * and "type" : "commonjs" then all files with .js as an extension supports 
 * commonjs moduling  i.e., we can only use require but inorder to use import 
 * we need to modify the the file extension from .js to .mjs 
 */
import Searching from "./SearchingAlgo.js";

let arr = [1 , 2 , 3 , 4 , 5 , 6 ];
let target = 1;
console.log(Searching.linear(arr , target) , Searching.binary(arr , target));