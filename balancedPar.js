/**********************************************************************************************
 *  Execution       :   1. default node         cmd> node balancedPar.js       
 *  @purpose        : cheking the given expression is balanced or not using the stack inplementation 
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 07-09-2018
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
// implenting the balanced function for giving input and calling it to check the paranthesis
function balanced()
{
    read.question("enter the equation: ",function(exp){
        utility.bal_Paranthesis(exp);
        read.close();
 })
}      
balanced();