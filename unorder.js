/**********************************************************************************************
 *  Execution       :   1. default node         cmd> node unorder.js       
 *  @purpose        : reading the text file from the list and search the word if found remove 
 *                    the word ,if word is not found add the word through linked list
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 07-08-2018
 *
 ***********************************************************************************************/

//Including the readline module from package to program
var readline=require('readline');
// Including the folder address for calling the functions to main
var utility=require('../Utility/mainutility.js');
//Instance of readline.Interface class is constructed from a method readline.createInterface
var read=readline.createInterface({
//Every instance of readline consists of one readble input and writable input
    input:process.stdin,
    output:process.stdout
});
function unOrdered()
{
    //This file system module allows you to work with the file system on computer.
    var fs = require("fs");
    try 
    {
        //used to encode the message to read the file and stored in a variable data
        var data = fs.readFileSync("unordered.txt", "utf8");
    }
    catch(e)
    {
        console.log("Error:", e.stack);
    }
    //reading the search word from user through readline
    read.question("enter the word, you want to search: ",function(word)
    {
        //calling the function from utility and storing the return value in output
        var output=utility.unOrdered(data,word.toLowerCase());
        //inorder to enter the data in to the file writefileSync is used
        fs.writeFileSync("unordered.txt",output);
        read.close();
    });
}
unOrdered();