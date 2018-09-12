var utility = require('/home/bridgeit/datastructures/Utility/utility.js');
fs = require('fs');
var data = fs.readFileSync('orderedtext.txt', 'utf8');
console.log(data);
data = data.toString().split(' ');
data.sort(function (a, b) {
    return a - b;
});

var readline = require('readline');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function orderedList() {
    //var array = [];
    var list = new utility();

    for (var i = 0; i < (data.length); i++)      /**adding data to list*/
    {
        list.add(data[i]);
    }
    console.log("ascending order of list: ");   /**Ascending order representation of list*/
    var string = list.printList();

    console.log(string);
    
    read.question('Enter the element to search: ', function (element) {
        if(isNaN(element)) 
        {
            console.log("Please enter a numeric value to search...............");
            return;
            
        }
        //string = list.printList();
        if (list.indexOf(element) == -1) {
            list.insertSort(parseInt(element));      /**inserts an element at appropriate position*/
        }
        else {
            list.removeElement(element);              /**Removes the element from the list */
        }
        string = list.printList();
        console.log(string);                         /**prints the elements in the list */
        fs.writeFileSync('orderedtext.txt', string);

        read.close();

    });
}
orderedList();

























	
	
	
