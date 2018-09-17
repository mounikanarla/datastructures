/**********************************************************************************************
 *  Execution       :   1. default node         cmd> inventManage.js       
 *  @purpose        : to Create InventoryManager to manage theInventory. The Inventory Manager will use InventoryFactory to create Invent
 *                    Object from JSON. The InventoryManager will call each Inventory Object in its list
 *                    to calculate the Inventory Price and then call the Inventory Object to return the
 *                    JSON String. The main program will be with InventoryManager
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 11-09-2018
 *
 ***********************************************************************************************/
//Including the readline module from package to program
var readlineSync=require('readline-sync');
// Including the folder address for calling the functions to main
var utility=require('/home/bridgeit/datastructures/main/oops/utility.js/utility.js');
//Instance of readline.Interface class is constructed from a method readline.createInterface

function invent()
{
   var size=readlineSync.question("Enter the noofshares that you want: ");
   utility.inventManage(size,readlineSync);
}
invent();