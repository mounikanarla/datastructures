var fs = require('fs');
var data = fs.readFileSync('stock.json');
var obj=JSON.parse(data);
//console.log(obj);
var stock=obj.stock;
for(var key in stock)
{
    console.log("\n");
    console.log(stock[key]);
    console.log("The total price of "+ stock[key].stockname+ " is "+stock[key].no_of_shares*stock[key].stockprice);
}