/**********************************************************************************************
 *  Execution       :   1. default node         cmd> anagram.js       
 *  @purpose        : printing the primenumbers in the given range checking the anagrams 
 *                    and storing the anagrams in stack and displaying it
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 09-09-2018
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
function primeAna() {
    read.question('Enter the range ', function (range) {
        utility.primeAna(range);
        //read.close();
    });

}
primeAna();