/**********************************************************************************************
 *  Execution       :   1. default node         cmd> primeNumber2d.js       
 *  @purpose        : printing the primenumbers and storing the numbers from 0 to 100 ,
 *                    100 to 200 values in a 2d array
 *                    
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 09-09-2018
 *
 ***********************************************************************************************/

/*Including the readline module from package to program*/
var readlineSync=require('readline-sync')
/* Including the folder address for calling the functions to main*/
var utility=require('../Utility/mainutility.js');
function prime()
{
    var min=readlineSync.question("Enter the minimum value: ");
    var max=readlineSync.question("Enter the maximun value: ");
    //if the range is in between the min and max the values will taken
    if(min>=0 && max<=1000 )
    {
      var  minimum=parseInt(min);
      var  maximum=parseInt(max);
    }
    else
    {
        console.log("Re-Enter the number: ");
        return prime();
    }
    utility.primeNumber2d(minimum,maximum);
    //read.close();


}
prime();