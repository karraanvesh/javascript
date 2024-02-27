/**
 * By default node enables commonjs moduling 
 * If there is no package.json file in the current folder 
 * we can have file_name extensions as .js only , now 
 * we need to use module.exports to export all the things to the 
 * other files and we can require from other files 
 */
const {linear , binary} = require("./SearchingAlgo.js");

let arr = [1 , 2 , 3 , 4 , 5 , 6 ];
let target = 5;
console.log(linear(arr , target) , binary(arr , target));