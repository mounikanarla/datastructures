var readlineSync = require('readline-sync');
var fs = require('fs');
var utility = require('../Utility/utility.js');

function ll() {
    var list = fs.readFileSync('unordered.txt', 'utf8');//import list from the text file
    var arr = list.split(' ');
    var l = new utility();

    
    for (var i = 0; i <arr.length; i++) {
        l.add(arr[i]);
    }
  
    var index=readlineSync.question("enter the index where you want to search");
    var elein=l.get(index);
    console.log("element at given index is "+elein);
    var ele=readlineSync.question("enter the element to be removed");
     var index=l.indexOf(ele);
     if(index>=0){

         l.remove(index);
     }
        else{
            l.add(ele);
        }
         var str=l.printlist();
         fs.writeFileSync('unordered.txt',str.trim());
}
ll();