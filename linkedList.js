function linkedList(){
    this.head=null;
}

linkedList.prototype.isEmpty=function(){
    return (this.head==null);
};

linkedList.prototype.getSize=function(){
    var current=this.head;
    var count=0;

    while(current!=null){
        count++;
        current=current.next;
    }
    return count;
};

linkedList.prototype.prepend=function(value){
    var newNode={
        data:value,
        next:this.head
    };

    this.head=newNode;
};

linkedList.prototype.add=function(value){
    var newNode={
        data:value,
        next:null
    };

    if(this.isEmpty()){
        this.head=newNode;
        return;
    }

    var current=this.head;

    while(current.next!=null){
        current=current.next;
    }

    current.next=newNode;
};

linkedList.prototype.contains=function(value){
    var current=this.head;

    while(current!=null){
        if(current.data==value){
            return true;
        }
        current=current.next;
    }
    return false;
};

linkedList.prototype.remove=function(value){
    if(!this.contains(value)){
        return;
    }

    if(this.head.data==value){
        this.head=this.head.next;
        return;
    }

    var prev=null;
    var current=this.head;

    while(current.data!=value){
        prev=current;
        current=current.next;
    }
    prev.next=current.next;
};

linkedList.prototype.print=function(){
    var output="";
    var current=this.head;

    while(current!=null){
        output+=current.data;
        if(current.next!=null){
            output+=" ";
        }
        current=current.next;
    }
    return (output);
};

linkedList.prototype.getIndex=function(value){
    if(!this.contains(value)){
        return;
    }
    var index=0;
    var current=this.head;

    while(current!=null){
        if(current.data==value){
            return index;
        }
        current=current.next;
        index++;
    }
};

module.exports=new linkedList();