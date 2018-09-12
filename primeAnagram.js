/**********************************************************************************************
 *  Execution       :   1. default node         cmd> primeAnagram.js       
 *  @purpose        : printing the primenumbers in the given range checking the anagrams 
 *                    and storing the anagrams in stack and displaying it
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 09-09-2018
 *
 ***********************************************************************************************/

/*Including the readline module from package to program*/
var readlineSync=require('readline-sync')
/* Including the folder address for calling the functions to main*/
var utility=require('../Utility/mainutility.js');
function primeAnagram()
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
    //calling the function to print the prime numbers
    var primenumbers=utility.primeAnagram(minimum,maximum);
    console.log("Prime numbers in the given range are: ");
    console.log(primenumbers);
    //Finding the anagram numbers with in the prime numbers and storing in seperate arrays
    var anagram=[];
    var notanagram=[];
    for(var i=0;i<primenumbers.length-1;i++)
    {
        for(var j=i+1;j<primenumbers.length;j++)
        {
            var str1=primenumbers[i].toString();
            //console.log(str1);
            var str2=primenumbers[j].toString();
            //console.log(str2);
            var res=utility.anagram(str1,str2);
           // console.log(res);
            if(res===true)
            {
                anagram.push(primenumbers[i]);
                anagram.push(primenumbers[j]);
            }
            else 
            {
                notanagram.push(primenumbers[i]);
                // console.log(notanagram);
                //notanagram.push(primenumbers[j]);
                // console.log(notanagram);
            }
        }
    }

    anagram=removeDuplicates(anagram);
    notanagram=removeDuplicates(notanagram);
    var res1=[];
    res1.push(anagram);
    res1.push(notanagram);
    console.log(res1);
// to remove the repeated values in a given array 
function removeDuplicates(arr)
{
    var array=[];
    for(var i=0;i<arr.length;i++)
    {
        if(array.indexOf(arr[i])== -1)
        {
            array.push(arr[i]);
        }
    }
 return array;   
}
}
primeAnagram();