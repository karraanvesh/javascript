/**
 * If the current folder contains package.json file 
 * and "type" : "commonjs" then inorder to use import in a file
 * we need have .mjs as an file extension ex : index.mjs as shown below 
 */
import Searching from "./SearchingAlgo.js";

let arr = [1 , 2 , 3 , 4 , 5 , 6 ];
let target = 1;
console.log(Searching.linear(arr , target) , Searching.binary(arr , target));