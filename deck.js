/**********************************************************************************************
 *  Execution       :   1. default node         cmd> deck.js       
 *  @purpose        :  to create a Player Object having Deck of Cards, and having ability 
 *                     to Sort by Rank and maintain the cards in a Queue implemented using Linked List.  
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 15-09-2018
 *
 ***********************************************************************************************/
// adding the utility folder to call the function
var utility=require('/home/bridgeit/datastructures/main/oops/utility.js/utility.js');
function cards()
{
    utility.deck();
}
cards();