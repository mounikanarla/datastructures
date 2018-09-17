/**********************************************************************************************
 *  Execution       :   1. default node         cmd> inventory.js       
 *  @purpose        : Create a JSON file having Inventory Details for Rice, Pulses and Wheats
                      with properties name, weight, price per kg.
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 11-09-2018
 *
 ***********************************************************************************************/

//This file system module allows to work with the file system on computer.
var fs = require('fs');
// adding the utility folder to call the function
var utility=require('/home/bridgeit/datastructures/main/oops/utility.js/utility.js');
// to read the file from JSON and stored in a variable data
var data = fs.readFileSync('inventory.json');
//converting the string into object
var obj=JSON.parse(data);
function inventory()
{
    utility.inventory(obj);
}
inventory();

