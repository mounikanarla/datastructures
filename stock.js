/**********************************************************************************************
 *  Execution       :   1. default node         cmd> stock.js       
 *  @purpose        :A program to read in Stock Names, Number of Share, Share Price.
                     Print a Stock Report with total value of each Stock and the total value of Stock.
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 12-09-2018
 *
 ***********************************************************************************************/
//This file system module allows to work with the file system on computer.
var fs = require('fs');
// adding the utility folder to call the function
var utility=require('/home/bridgeit/datastructures/main/oops/utility.js/utility.js');
// to read the file from JSON and stored in a variable data
var data = fs.readFileSync('stock.json');
//converting the string into object
var obj=JSON.parse(data);
function stock()
{
    //caling the stock function from utility to main
    utility.stock(obj);
}
stock();


