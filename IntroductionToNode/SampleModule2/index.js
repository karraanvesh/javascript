/**
 * If the current folder contains package.json file with "type" : "module"
 * Then , all the files with .js as an extension are in es6 moduling and 
 * need to follow the standards of es6 moduling .
 * In es6 moduling there is no module.exports , module.exports is supported by 
 * the commonjs moduling files (.cjs extensions ) . So , inorder to use 
 * module.exports we need to have file extension as .cjs .
 */
import Searching from "./SearchingAlgo.cjs";

let arr = [1 , 2 , 3 , 4 , 5 , 6 ];
let target = 3;
console.log(Searching.linear(arr , target) , Searching.binary(arr , target));