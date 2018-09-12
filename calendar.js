/**********************************************************************************************
 *  Execution       :   1. default node         cmd> calendar.js       
 *  @purpose        : dispalying the calendar of the given year and month
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
function  days()
{
    //Reading the year from the user in a yyyy format
    var year=readlineSync.question("Enter the year: ");
    if(isNaN(year)||year.length!=4)
    {
        console.log("Re-Enter the year: ");
    var year=readlineSync.question("Enter the year: ");

    }
    //Reading the month from the user in mm format
    var month=readlineSync.question("Enter the month: ")
    if(isNaN(month)||month.length!=2)
    {
        console.log("Re-Enter the month: ");
        var month=readlineSync.question("Enter the month: ");
    }
    date=year+"-"+month+"-"+"/1";
    //creating object for the Date method 
    var object_Date=new Date(date);
    var no_Of_Days=new Date(object_Date.getFullYear(),object_Date.getMonth()+1,0).getDate();
    // displays no of weeks in a month
    var weeks=object_Date.getDay();
    console.log(no_Of_Days);
    console.log(weeks);
    utility.calendar(no_Of_Days,weeks);
}
days()