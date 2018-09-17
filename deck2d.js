/**********************************************************************************************
 *  Execution       :   1. default node         cmd> deck2d.js       
 *  @purpose        : Shuffle the cards using Random method and then distribute 9 Cards 
 *                    to 4 Players and Print the Cards the received by the 4 Players using 2D Array...
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 15-09-2018
 *
 ***********************************************************************************************/
// adding the utility folder to call the function
var utility=require('/home/bridgeit/datastructures/main/oops/utility.js/utility.js');
function cards()
{
    utility.deck2d();
}
cards();