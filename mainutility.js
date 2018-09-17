//including the linked list file in mainutility
var linkedList=require('./linkedList.js');
//including the stack file in mainutility
var stack=require('./utility1');
//including the queue file in mainutility
var queue=require('./utility2');
//including the dequeue file in mainutility
var dequeue=require('./utility3');
//including the queue file in mainutility
var list=require('./utility');
//creating a new object stack
var stack = new stack();
//creating the new object queue
var queue=new queue();
//creating the new object dequeue
var dequeue=new dequeue();
var list=new list();
module.exports={
// creating an unordered function to search the word from the file for adding and deleting in linkedlist
    unOrdered : function(data,word)
    {
        //the data from text file is splitting and storing it in an array
        var array=data.split(" ");
        //adding each and every word in linkedlist through add method 
        for(var i=0;i<array.length;i++)
        {
            linkedList.add(array[i]);
        }
        // if the linked list contains word then the element is removed from the list
        if(linkedList.contains(word)==true)
        {
            console.log("\nelement found!!!\nElement Deleted\n");
            linkedList.remove(word);
        }
        //if the linked list doesnt contains word then the element is added for the list
        else
        {
            console.log("\nelement not found!!!\nElement added\n");
            linkedList.add(word);
        }
        //returning the words present in the linked list
        return linkedList.print();
    },
    orderedList : function()
    {  
         var readlineSync=require('readline-sync');
        fs = require('fs');
        try{
        var data = fs.readFileSync('/home/bridgeit/datastructures/main/orderedtext.txt', 'utf8');
        console.log(data);
        data = data.toString().split(' ');
        data.sort(function (a, b) {
           return a - b;
        });
        }catch{

        }     
         //adding data to list
        for (var i = 0; i < (data.length); i++)     
    {
        list.add(data[i]);
    }
    //Ascending order representation of list
    console.log("ascending order of list: "); 
    var string = list.printList1();

    console.log(string);
    
    var element=readlineSync.question('Enter the element to search: ');
        if(isNaN(element)) 
        {
            console.log("Please enter a number to search: ");
            return;
            
        }
        //string = list.printList();
        if (list.indexOf(element) == -1) {

             //inserts an element at appropriate position
            list.insertSort(parseInt(element));
        }
        else {
            //Removes the element from the list 
            list.removeElement(element);            
        }
        string = list.printList1();
        console.log(string);                         
        //prints the elements in the list
        fs.writeFileSync('/home/bridgeit/datastructures/main/orderedtext.txt', string);
    },

    /* function: taking an expressing as user input and checking the paranthesis
             wheather it is balanced or not*/
    bal_Paranthesis: function(exp)
    {   
        //taking the length of expression and storing it in a variable
        var len=exp.length;
        // Declaring the variables to check the paranthesis
        var first=0,last=0;
             // Initializing the for loop to repeat upto the length of the expression
            for(var i=0;i<len;i++)
            {
              // charAt return the value at every index and storing in variable
              var ch=exp.charAt(i);
              //if the given character is open paranthesis then it will push in stack 
              if(ch==='(')
              {
                 stack.push(i);
                 first++;
              }
              //if the given character is closed paranthesis then it will pop from the stack
              else if(ch===')')
              {
                try{
                      stack.pop();
                      last++;
                   }catch(err)
                    {
                      console.log("')' at index "+i+" is unmatched ");
                    }
              }
           } 
    // if the stack is empty the given expression is balanced        
    if(stack.isEmpty() && (first==last))
    {
        //console.log("'(' at index "+(stack.pop())+" is unmatched and is not a balanced equation");
        console.log("balaced equation")
    }
    // if the stack contains values then it is unbalanced
    else{
        console.log("unbalanced equation");
    }
   },

   //Implementing the cash counter function to perform adding and removing the persons using queue
   cashcounter : function(size)
   {
    var readlineSync=require('readline-sync');
    var amount=10000;
    //taking the size as user input and adding the persons in the queue
    for(var i=0;i<size;i++)
    {
        var ele=readlineSync.question("add persons to the queue: ")
        queue.enqueue(ele);
    }
    console.log(queue.printQueue());
    //performing the cash counter operation using the do-while until the persons count become zero
    do
   {
    console.log("****** CASH COUNTER ******");
    console.log("1.Deposit amount");
    console.log("2.withdraw amount");
    console.log("3.For Exit");
    var choice=readlineSync.question("Enter the choice: ");
    //switch is used to perform the operations like deposit,withdraw and exit operations
    switch(parseInt(choice))
   {
       case 1: console.log("the persons at cash counter are: "+queue.printQueue());
               var amt=readlineSync.question("Enter the amount that you want to deposit: ");
               amt=parseInt(amt);
               amount=amt+amount;
               console.log("Balance in your account is: "+amount)
               // after performing the operations the person is deleted from queue using dequeue
               queue.dequeue()
               break;
       case 2: console.log("the persons at cash counter are: "+queue.printQueue());
               var amt=readlineSync.question("Enter the amount that you want to withdraw: ");
               amount=amount-amt;
               if(amount<500)
               {
                   console.log("Insufficient amount");
               }
               else
               {
               console.log("Balance in your account is: "+amount);
               }
               // after performing the operations the person is deleted from queue using dequeue
               queue.dequeue();
               break;
       case 3: process.exit();
      default: console.log("Invalid input");
                break;
   }
   var element=readlineSync.question("If you want to add persons in the queue press 1: ");
   // persons will add to the list by giving the element value as one
   if(parseInt(element)==1)
   {
        var ele=readlineSync.question("enter the list of queue: ");
        queue.enqueue(ele);
        console.log("The persons in queue after adding are" +queue.printQueue());
   }
   } while(queue.isEmpty()!=0)//loop will run until the queue value is non empty
   },


     primeNumber2d : function(min1,max1)
    {
       // creating the array sizes
       var size = (Math.floor(max1 / 100) + 1);
       // range of the prime numbers 
       var range = Math.floor(min1 / 100);
       // all the arrays in the size are taken in arr1
       var arr1 = [];
       min = min1;
       // if the min value is zero it will directly print prime numbers upto 100
       if (min1 == 0) {
          min=2;
          max = 99;
      }
       else {
         max = ((range + 1) * 100) - 1;
        }
        // Initializing the loop to repeat upto the size
        for (var index = range + 1; index <= size; index++)
         {
             // checking the values wheather it is prime number or not
             if ((max - min) < 100 && max <= max1) 
             {
                  var prime = new Array();
                     for (var i = min; i <= max; i++) 
                     {
                         var count = 0;
                             if(i==0||i==1)
                             {
                                  count=0;
                             }
                             for (var j = 1; j <= i; j++)
                              {
                                 if (i % j == 0) 
                                 {
                                      count++;
                                 }
                              }
                              // check the count value and pushing it in array
                             if (count <= 2)
                              {
                                 prime.push(i);
                              }
                     }
                     arr1.push(prime);
                    // if maximum range is less than 100 it will remaining values in array
                    if (max1 - max < 100)
                    {
                        range = Math.floor(min / 100);
                        min = (min + ((range + 1) * 100) - min);
                        max = max1 - 1;
                    }
                    // if maximum values is greater than 100,it will print the value
                    else {
                        range = Math.floor(min / 100);
                        min = (min + ((range + 1) * 100) - min);
                        max = max + 100;
                    }
             }
        }
       console.log('\n Prime Numbers in the given range are :')
       console.log(arr1);

    },
    palinchecker : function(string)
   {
     //if the input is in uppercase convert it into lowercase and splitting the string
     var str=string.toLowerCase('').split('');
     //initializing the for loop to add the string values to queue
     for(var i=0;i<str.length;i++)
      {
          dequeue.addRear(str[i]);
          //console.log(str[i]);
      }
      var flag=true;
      //while loop is initilized when the dequeue is greater than one 
      while(dequeue.size()>1 && flag==true)
      {
          var first=dequeue.removeFront();
          var last=dequeue.removeRear();
          //comparing the first and last values of the string
          if (first != last)
           {
              //first and last values are not equal
              flag = false;
           }
          else
           {
              //first and last values are equal
              flag = true;
           }
      }
      if(flag === true)
      {
         console.log("the given string is a palindrome");
      }
      else
      {
         console.log("the given string is not a palindrome");
      }

    },

    binaryTree : function(node)
    {
        for(var subNode=1;subNode<=node;subNode++)
        {
           /**
            * @description it prints for each number 
            */
            var cons=parseInt(subNode)*2;
            var result = 1; 
            for (var i = 0; i < subNode; ++i) 
            { 
                result *= (cons - i);
                result /= (i + 1); 
               /**
                * @description it calculates number of tree for the given nodes
                */
            }
            var catalan=result/(parseInt(subNode)+1);
            console.log(catalan);
        }
    },

    //checking the prime numbers with in the given range
    primeAnagram : function(min,max)
    {
        var prime = new Array();
        if (min == 0 || min == 1)
        {
            min = 2;
        }
      //checking every value wheather the given value is prime ar not
     for (var i = min; i <= max; i++) {
            var count = 0;
       for (var j = 1; j <= i; j++) {
                if (i % j == 0) {
                    count++;
                }
            }
            if (count <= 2) {
               prime.push(i);
            }
        }
       return prime;
    },
    anagram : function(str1,str2)
    {   
       //splitting the array values,sorting them and joining the values and storing 
       var string1=str1.split('').sort().join();
       var string2=str2.split('').sort().join();
       //comparing the length of the arrays
       if(string1.length==string2.length)
       {
           //comparing the values using compare function and storing in value
           var value=this.compare(string1,string2)
          {
              if(value)
              {
                return true;
              }
              else
              {
                return false;
              }
          }
       }
       else
        {
          return false;
        }

    },
   //comparing the string values to check anagrams and returs the count value 
   compare : function(arr1,arr2)
   {
      var count=0;
      for(var i=0;i<arr1.length;i++)
      {
         if(arr1[i]==arr2[i])
         {
            count=count+1;
         }
      }
      return (arr1.length == count)
   },

   primeAna : function(range)
  {
    var arr = [];
    var arr1 = [];

        for (var i = 2; i <= range; i++) {
            var flag = false;
               // This gives all the prime numbers between the given range
            for (var j = 2; j <= i / 2; j++)   
            {
                   if(i % j === 0) 
                {
                    flag = true;
                }
            }
            if (flag === false) {
                arr.push(i);

            }
        }
        for (var i = 0; i <= arr.length - 1; i++) {
            //compares anagrams within all the primes using 2 for loops
            for (var j = i + 1; j <= arr.length; j++)
            {
                var s1 = '' + parseInt(arr[i]);
                /**parseInt()
                 ** Description:
                  * The parseInt() function parses a string and returns an integer. */
                var s2 = '' + parseInt(arr[j]);
                //compares the 2 strings by sorting & spliting
                if ((((s1.split('')).sort()).join()) === (((s2.split('')).sort()).join())) 
                {
                    arr1.push(parseInt(s1));
                    arr1.push(parseInt(s2));
                }
            }
        }console.log("anagram numbers are: "+arr1);
        // Anagram values are pushing into the stack 
        for(var i=0;i<arr1.length;i++)
        {
            stack.push(arr1[i]);
        }

        console.log("\nThe Anagram values in reverse order are: "+stack.printstack());
  },
   ana_Queue : function(range)
   {
      var arr = [];
      var arr1 = [];
          for (var i = 2; i <= range; i++) {
               var flag = false;
               //This gives all the prime numbers between the given range
              for (var j = 2; j <= i / 2; j++)    
              {
                   if(i % j === 0) 
                   {
                       flag = true;
                   }
              }
              if (flag === false) {
                 arr.push(i);

               }
          }
        for (var i = 0; i <= arr.length - 1; i++) {
            //compares anagrams within all the primes using 2 for loops
            for (var j = i + 1; j <= arr.length; j++)
            {
                var s1 = '' + parseInt(arr[i]);
                /**parseInt()
                 ** Description:
                  * The parseInt() function parses a string and returns an integer. */
                var s2 = '' + parseInt(arr[j]);
                //compares the 2 strings by sorting & spliting
                if ((((s1.split('')).sort()).join()) === (((s2.split('')).sort()).join()))  
                {
                    arr1.push(parseInt(s1));
                    arr1.push(parseInt(s2));
                }
            }
        }console.log("anagram numbers are: "+arr1);
        // adding the anagram values to the queue
        for(var i=0;i<arr1.length;i++)
        {
            queue.enqueue(arr1[i]);
        }

        console.log("\nThe Anagram values in queue are: "+queue.printQueue());
    },

   calendar : function(noofdays,weekday)
  {
    //taking the arrays to store the values of week and days
    var calendar = [];
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    var week = [];
    // pushing the days of the month in an array
    calendar.push(days)
    var dates = 1;
    //loop is initialized to print the days in a month
    for (var i = 0; i < days.length; i++) {
        //if the days are not there in a week then it will print empty string
        if (i < weekday)
            week[i] = " ";
        //if the days are present then it will print the days    
        else {
            week[i] = dates;
            dates++;
        }
    }
    calendar.push(week)
    while (dates <= noofdays) {
        var week = [];
        for (var i = 0; i < days.length; i++) {
            week[i] = dates;
            dates++;
            if ((dates - 1) > (noofdays))
                week[i] = " "
        }

        calendar.push(week)

    }
    this.print(calendar)
  },
   //@function print() prints the calendar
   print: function (calendar) {
    for (var i = 0; i < calendar.length; i++) {
        var str = ""
        for (var j = 0; j < calendar[i].length; j++) {
            str = str + " \t " + (calendar[i])[j]

        }
        console.log(str);
    }
   },
  calendarQueue : function(year,month)
  {
      var day=31;
        if (month==2)
        {
            if(((year%4==0)&&(year%100!=0))||(year%400==0))
            {
                day=29;
            }
            else 
                day=28;
        
            // if the month is 2,it checks leapyear or not
        }
        else if(month==4||month==6||month==9||month==11)
        {
            day=30;
           
            // if month is 4,6,9,11 then 30 days in that month
        }

        var y=parseInt(year);
        var m=parseInt(month);
        var d=1;
        var y0=y-Math.floor((14-m)/12);
        var x=y0+Math.floor(y0/4)-Math.floor(y0/100)+Math.floor(y0/400);
        var m0=m+12*Math.floor((14-m)/12)-2;
        var d0=(d+x+Math.floor(31*m0/12))%7;
        d0=parseInt(d0);
    
        //it checks the day of week in the given year on starting day of month
        console.log("sun  mon  tue  wed  thu  fri  sat");
        arr1=[];
        var date=1;
        for(var i=0;i<d0;i++)
        {
            arr1[i]="     ";
    
        // it adds space to array if the calender does not start with sunday upto that day
    
        }
        while(date<=day)
        {
            if(date<10)
            arr1.push(" "+date+"   ");
            else
            arr1.push(date+"   ");
            date++;
    
        //  it adds date to calender according to day name
        }
        var remain=42-d0-day;
        for(var i=0;i<remain;i++)
        {
            arr1.push("   ");
       
        //@description it adds space after adding date to calender.other wise it will show undefined instead
        }
        var pos=0;
        for(var i=0;i<6;i++)
        {
            var str="";
            for(var j=0;j<7;j++)
            {
                str=str+arr1[pos];
                pos++;
            }
            queue.enqueue(str);
    
        // the dates are added to the queue
        }
        for(var k=0;k<6;k++)
        {
            console.log(queue.front());
            // printing the queue
            queue.dequeue();
        }
    }
	
	


}