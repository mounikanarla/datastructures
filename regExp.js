var fs = require('fs');
var readlineSync=require('readline-sync');
function replace()
{
  var data = fs.readFileSync('regExp.txt','utf8');
  var name=readlineSync.question("Enter your name: ");
  if(isNaN(name)==false)
  {
      console.log("Re-Enter your name: ");
      var name=readlineSync.question("Enter your name: ");
  }
  var fullname=readlineSync.question("Enter your fullname: ");
  if(isNaN(fullname)==false)
  {
      console.log("Re-Enter your fullname: ");
      var fullname=readlineSync.question("Enter your fullname: ");
  }
  var number=readlineSync.question("Enter your mobile number: ");
  var num=parseInt(number);
  if(isNaN(num)==true || number.length!=10)
  {
      console.log("Re-Enter your number: ");
      var number=readlineSync.question("Enter your number: ");
  }
  var date=new Date();
  var pre_Date=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
  data=data.replace(/<<name>>/g,name);
  data=data.replace(/<<fullname>>/g,fullname);
  data=data.replace(/xxxxxxxxxx/g,number);
  data=data.replace("xx/xx/xxxx",pre_Date);
  console.log(data);
  fs.writeFileSync("reg_Exp",data);
}
replace()