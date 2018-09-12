/**********************************************************************************************
 *  Execution       :   1. default node         cmd> node palinchecker.js       
 *  @purpose        : checking the given string is a palindrome bu using dequeue implementation 
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 08-09-2018
 *
 ***********************************************************************************************/

/*Including the readline module from package to program*/
var readlineSync=require('readline-sync')
/* Including the folder address for calling the functions to main*/
var utility=require('../Utility/mainutility.js');
/*Instance of readline.Interface class is constructed from a method readline.createInterface*/
function  palinchecker()
{
    var string=readlineSync.question("Enter the string value to check for palindrome: ");
    //if the given value is not a string then it ask to reenter the string to check
    if(isNaN(string)==false)
    {
        console.log("Re-Enter the string value ");
        var string=readlineSync.question("Enter the string value to check for palindrome: ");
       
    }
    utility.palinchecker(string);
}
palinchecker();