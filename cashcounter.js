/**********************************************************************************************
 *  Execution       :   1. default node         cmd> node cashconter.js       
 *  @purpose        : performing cashcounter operation using the queue implementation 
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 07-09-2018
 *
 ***********************************************************************************************/

/*Including the readline module from package to program*/
var readlineSync=require('readline-sync');
/* Including the folder address for calling the functions to main*/
var utility=require('../Utility/mainutility.js');
/*Instance of readline.Interface class is constructed from a method readline.createInterface*/
function   cashcounter()
{
  var size=readlineSync.question("enter the size of the queue: ");
  utility.cashcounter(size);
}
cashcounter();