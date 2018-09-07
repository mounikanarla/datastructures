/*Including the readline module from package to program*/
var readline=require('readline');
/* Including the folder address for calling the functions to main*/
var utility=require('../Utility/utility1.js');
/*Instance of readline.Interface class is constructed from a method readline.createInterface*/
var read=readline.createInterface({
/*Every instance of readline consists of one readble input and writable input*/  
    input:process.stdin,
    output:process.stdout
});
function balanced()
{
    read.question("enter the equation: ",function(exp){
        var stack=new utility();
        var len=exp.length;
    for(var i=0;i<len;i++)
    {
           var ch=exp.charAt(i);
            if(ch=='(')
            {
               stack.push(i);
            }
            else if(ch==')')
            {
              try{
                    var p=(stack.pop());
                    console.log("')' at index "+i+" matched with'(' at index "+p);
                 }catch(err)
                   {
                     console.log("')' at index "+i+" is unmatched ");
                   }
            }
        }
           while(!stack.isEmpty())
           {
              console.log("'(' at index "+(stack.pop())+" is unmatched and is not a balanced equation");
           }
    })
}
balanced();