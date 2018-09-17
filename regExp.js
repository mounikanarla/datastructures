/**********************************************************************************************
 *  Execution       :   1. default node         cmd> regExp.js       
 *  @purpose        : Read in the following message: Hello <<name>>, We have your full
 *                    name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.
 *                    Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
 *                    Use Regex to replace name, full name, Mobile#, and Date with proper value.
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 11-09-2018
 *
 ***********************************************************************************************/

// adding the utility folder to call the function
var utility=require("/home/bridgeit/datastructures/main/oops/utility.js/utility.js")
// including the readlineSync module to the function
var readlineSync=require('readline-sync');
function regExp()
{
  var name=readlineSync.question("Enter your name: ");
  //Using isNaN function to check the given input is string or not
  if(isNaN(name)==false)
  {
      console.log("Re-Enter your name: ");
      var name=readlineSync.question("Enter your name: ");
  }
  //Using isNaN function to check the given input is string or not
  var fullname=readlineSync.question("Enter your fullname: ");
  if(isNaN(fullname)==false)
  {
      console.log("Re-Enter your fullname: ");
      var fullname=readlineSync.question("Enter your fullname: ");
  }
  var number=readlineSync.question("Enter your mobile number: ");
  //converting the string into number
  var num=parseInt(number);
   //Using isNaN function to check the given input is a number or not and its length
  if(isNaN(num)==true || number.length!=10)
  {
      console.log("Re-Enter your number: ");
      var number=readlineSync.question("Enter your number: ");
  }
  //creating new object to print the present date
  var date=new Date();
  var pre_Date=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
  utility.regExp(name,fullname,number,pre_Date);

}
regExp();