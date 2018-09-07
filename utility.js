
class Node {
    constructor(e, n) {
        this.ele = e;
        this.next = n;
    }
}
module.exports = class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.count = 0;
    }
    add(e) {
        if (this.first == null) {
            this.first = new Node(e,null);
            this.last = this.first;
            this.count++;
            return;
        }
        this.last.next = new Node(e,null);
        this.last = this.last.next;
        this.count++;
    }
    printlist(){
        var current=this.first;
        var str=" ";
        while(this.first){
            str+=this.first.ele+" ";
            this.first=this.first.next;
        }
        console.log("linked list is "+str)
        return str;
    }
    get(index) {
        if (index >= this.size()) {
            console.log("invalid index")
            return -1;
        }
       var n = this.first;
        for (var i = 1; i <= index; i++) {
            n =n.next;
            // console.log("element found at i is "+i)
        }
        return n.ele;

    }
    size() {
        return this.count;
    }
    indexOf(key){
        var n=this.first;
        for(var i=0;i<this.size();i++){
            if(n.ele==key){
                 console.log(i);
                return i;
            }
            n=n.next;
        }  
        return -1;
    }
    remove(index){
        console.log("remove function")
        var n=this.first;
        var prev=n;
        if(index==0){
            this.first=n.next;
        }
        for(var i=0;i<index;i++){
            prev=n;
            n=n.next;
        }
        prev.next=n.next;
        this.count--;

    }
  

}


	
