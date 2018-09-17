//including the dequeue file in mainutility
var queue=require('../../../Utility/utility2');
var list=require('../../../Utility/utility');
//creating the new object queue
var queue = new queue();
var list=new list();
module.exports={

   inventory : function(obj)
  {
      // converting every inventory value from string to object 
      var rice=obj.rice;
      var wheat=obj.wheat;
      var pulses=obj.pulses;
      //for every index value of rice loop will execute 
      for(var key in rice)
      {
         console.log("\n");
         console.log(rice[key]);
         //prints the total price of the rice 
         console.log("The total price of "+ rice[key].Ricename+ " is "+rice[key].weight*rice[key].price);
      }
      //for every index value of wheat loop will execute
      for(var key in wheat)
      {
         console.log("\n");
         console.log(wheat[key]);
         //prints the total price of the wheat
         console.log("The total price of "+ wheat[key].wheatname+ " is "+wheat[key].weight*wheat[key].price);
      }
      //for every index value of pulses loop will execute
      for(var key in pulses)
      {
         console.log("\n");
         console.log(pulses[key]);
         //prints the total price of the wheat
         console.log("The total price of "+ pulses[key].pulsename+ " is "+pulses[key].weight*pulses[key].price);
      }
    },

    //repalcing the text file by name,fullname,mobileno and printing in the text file
    regExp : function(name,fullname,number,pre_Date)
    {  
        //This file system module allows to work with the file system on computer.
        var fs = require('fs');
        //reading the data from the text file and storing in a variable data
        var data = fs.readFileSync('regExp.txt','utf8');
        //replacing the vaules with user inputs
        data=data.replace(/<<name>>/g,name);
        data=data.replace(/<<fullname>>/g,fullname);
        data=data.replace(/xxxxxxxxxx/g,number);
        data=data.replace("xx/xx/xxxx",pre_Date);
        console.log(data);
        //After reading the values again storing the replaced values in text file using writeFileSync
        fs.writeFileSync("reg_Exp",data);
    },

    stock : function(obj)
    {   
        //creating the object for stock 
        var stock=obj.stock;
        //For every value of stock loop will execute
        for(var key in stock)
        {
             console.log("\n");
             console.log(stock[key]);
             console.log("The total price of "+ stock[key].stockname+ " is "+stock[key].no_of_shares*stock[key].shareprice);
        }
        //creating tha variable to store total price of all stock values
        var stock1=0;
         for(var key in stock)
         {
           stock1=parseInt(stock1)+parseInt(stock[key].no_of_shares*stock[key].shareprice);
         }
          console.log("the total price of all the three stocks are: "+(stock1));
    },

    inventManage : function(nooftimes,readlineSync)
    {
        //This file system module allows to work with the file system on computer.
        var fs=require('fs');
        // adding the utility folder to call the function
        var data = fs.readFileSync('inventManagement.json');
        //converting the data from string to object
        var inventObject=JSON.parse(data);
        // loop is initialized to read the stock values as no of times
        for(i=1;i<=nooftimes;i++)
        {
           var name=readlineSync.question("Enter the name of stock: ");
           var share=readlineSync.question("Enter the number of shares you want: ");
           var shareprice=readlineSync.question("Enter each price of share: ");
           inventObject.stock.push({
               sharename :name,
               noofshares:share,
               price     :shareprice
           })
           console.log(inventObject);
           //user given input is writing into a file
           fs.writeFileSync('inventManagement.json',JSON.stringify(inventObject));
           var stock=inventObject.stock;
           //for evary stock printing the total price
           for(var key in stock)
           {
               //console.log(stock[key]);
               console.log("The totalprice of stock is: "+stock[key].noofshares*stock[key].price);
           }
         }
        

    },

    deck2d : function()
    {
        //creating an array with suit and rank
        var suit=["clubs","diamonds","hearts","spades"];
        var rank=["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];
        //creating a variable to store no of cards
        var n=suit.length*rank.length;
        // creating the array to store the deck of cards
        var deck=new Array();
        //to display suit and rank of cards
        for(var i=0;i<suit.length;i++)
        {
           for(var j=0;j<rank.length;j++)
            {
              var temp="";
              deck.push(temp+rank[j]+" "+suit[i]);  
              //deck[suit.length*i+j]=rank[j]+"of"+(suit[i]);
            }
        }
        //shuffling the deck of cards
        for(var i=0;i<n;i++)
        {
           var r=i+parseInt(Math.random()*(n-i));
           var temp=deck[r];
           deck[r]=deck[i];
           deck[i]=temp;
           //console.log(deck[r],deck[i]);
        }
        // distributing the deck of cards to 4 players
         var x=0,y=9;
         var arr1=[];
         var arr2=[];
         //loop is initialized that for every player receives 9 cards from the deck
         for(var i=0;i<4;i++)
          {
             for(var j=x;j<y;j++)
             {
                 //pushing each deck of nine cards into array
                 arr1.push(deck[j]);
             }
          //console.log("the nine cards distributed are: ")
         //console.log(arr1);
          x=x+9;
          y=y+9;
          //splicing will done for every arraylength
          while(arr1.length)
          {
              arr2.push(arr1.splice(0,10));
          }
        }
          console.log("The cards distributed to four players are : ");
        console.log(arr2);
    },
   Mysort: function(letters){
    {
        return function(a, b) {
            var indexA =letters.indexOf(a[0]),
            indexB = letters.indexOf(b[0]);
    
            if (indexA == indexB) {
                // same first character, sort regular
                if (a < b) {
                    return -1;
                } else if (a > b) {
                    return 1;
                }
                return 0;
            } else {
                return indexA - indexB;
            }
        }
    }

  },
deck : function()
{
  var suit = ["♣", "♦", "♥", "♠"];
  var rank=["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];
  var n=suit.length*rank.length;
  var deck=new Array();
  for(var i=0;i<suit.length;i++)
  {
      for(var j=0;j<rank.length;j++)
      {
        var temp="";
        deck.push(temp+rank[j]+""+suit[i]);  
        //deck[suit.length*i+j]=rank[j]+"of"+(suit[i]);
      }
  }
  for(var i=0;i<n;i++)
  {
      var r=parseInt(Math.random()*deck.length);
      var temp=deck[i];
      deck[i]=deck[r];
      deck[r]=temp;
  }
  var x=0,y=9;
  var arr2=[];
  for(var i=0;i<4;i++)
  {
    var arr1=[];
      for(var j=x;j<y;j++)
      {
          arr1.push(deck[j]);
      }

  //var sorting=this.Mysort('A2345678910JKQ');
  arr1=arr1.sort();
  console.log(arr1);
  arr2.push(arr1);
  x=x+9;
  y=y+9;
  }
//   for(var j=0;j<arr2.length;j++)
//   {
//       list.add(arr2[i])
//       var k=list.printList();
//   }
//   console.log("the cards distributed to all players are: "+k);
//   //console.log(arr1);
  for(var i=0;i<arr2.length;i++)
  {
      queue.enqueue(arr2[i]);
    var res=queue.printQueue();
  }
      console.log("the cards distributed to all the players are: "+res);
  
},
}










                                      
                                                               





                                                                                                                                                                                                                                  