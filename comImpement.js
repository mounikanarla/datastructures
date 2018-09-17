//This file system module allows to work with the file system on computer.
var fs = require('fs')
//creating readline module to read inputs
var readlineSync = require('readline-sync');
// to read the file from JSON and stored in a variable data
var data = fs.readFileSync('data.json');
//converting the string into object
var arrayOfObjects = JSON.parse(data)

class StockAccount {
    //creating the constructor to use the implemntation many no of times
    constructor(stockname, numberofshare, shareprice) {
        this.stockname = stockname;
        this.numberofshare = numberofshare;
        this.shareprice = shareprice;
    }

    //to buy shares
    buy() {
        var stock = readlineSync.question('enter number of stocks: ');
        //initalizing the for loop to add stock values to the json file
        for (var i = 1; i <= stock; i++) {
            var name = readlineSync.question('enter the name: ');
            var number = readlineSync.question('enter the number of share: ');
            var price = readlineSync.question('enter the price: ');
            arrayOfObjects.push({
                "name": name,
                "number_of_share": number,
                "price": price

            })

            console.log(arrayOfObjects);
        }


    }
    //logic for selling
    sell() {
        var i = readlineSync.question('which index u want to sell ? : ')
        arrayOfObjects.splice(i,1);
        console.log(arrayOfObjects);

    }
    //to save data to file
    save() {

        var res = JSON.stringify(arrayOfObjects)
        fs.writeFileSync('data.json', res, 'utf-8')

    }
    //to display the data 
    printReport() {
        var sum = 0;
        // console.log(arrayOfObjects.length);
        for (var i = 0; i < arrayOfObjects.length; i++) {
            //console.log(i);
            var num = parseInt(arrayOfObjects[i].number_of_share * arrayOfObjects[i].price);
            console.log("the total price of each stock is: " + num);
            sum = parseInt(sum + num);
        }
        console.log("the total price of stock is: " + sum);
    }
}
//creating the new object for stock account
var obj = new StockAccount();
while (1) {
    console.log('1.Buy the  Stocks');
    console.log('2.Sell the Stocks');
    console.log('3.Print the Stock Report');
    console.log('4.save the file');
    console.log('5.Exit');
    var choice = readlineSync.question('choose an option to perform desired operation :');
    switch (choice) {
        case '1': obj.buy()
                  break;
        case '2': obj.sell()

            function filterByID(item) {

                //console.log(item.name);

                if (item.name !== undefined) {
                    return true;
                }
                count++;
                return false;
            }

            arrayOfObjects = arrayOfObjects.filter(filterByID);

            console.log('Filtered Array\n', arrayOfObjects);
            break;

        case '3': obj.printReport()
                  break;
        case '4': obj.save();
                  break;
        case '5': process.exit()

        default: console.log('No Such Option ')
                 break;
    }
}

