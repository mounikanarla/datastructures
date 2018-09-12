var fs = require('fs');
var data = fs.readFileSync('inventory.json');
var obj=JSON.parse(data);
//console.log(obj);
var rice=obj.rice;
var wheat=obj.wheat;
var pulses=obj.pulses;
for(var key in rice)
{
    console.log("\n");
    console.log(rice[key]);
    console.log("The total price of "+ rice[key].Ricename+ " is "+rice[key].weight*rice[key].price);
}
for(var key in wheat)
{
    console.log("\n");
    console.log(wheat[key]);
    console.log("The total price of "+ wheat[key].wheatname+ " is "+wheat[key].weight*wheat[key].price);
}
for(var key in pulses)
{
    console.log("\n");
    console.log(pulses[key]);
    console.log("The total price of "+ pulses[key].pulsename+ " is "+pulses[key].weight*pulses[key].price);
}
