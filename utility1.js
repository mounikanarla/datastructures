
    class Node {
      constructor(e,n) {
         this.ele=e;
         this.next=n;
      }
  }
  module.exports=class stack{
      constructor(){
          this.count=0;
          this.first=null;
  
      }
      push(ele){
          this.first=new Node(ele,this.first)
          //console.log("add method "+this.first.ele)
          this.count++;   
       }
      printstack(){
          
           // var current = this.first;
          var str = " ";
          while (this.first) {
              str += this.first.ele + " ";
              this.first = this.first.next;
          }
          return str;
      }
      pop(){
          
          var n=this.first;
          if(n){
         this.first=n.next;
          this.count--;
          }
         else{
             this.count++;
         }
    }
      isEmpty()
      {
          //console.log("this.count is "+this.count)
          return this.count==0;
      }
  }

