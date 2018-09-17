function queue(){
    this.storage=[];
    this.front=-1;
    this.rear=-1;
}
queue.prototype.enqueue=function(value)
{
    if(this.front==-1 && this.rear==-1){
        this.front++;
        this.rear++;
        this.storage[this.front]=value;
    }
    else{
        this.rear++;
        this.storage[this.rear]=value;
    }
}

queue.prototype.dequeue=function()
{
    if(this.isEmpty())
        return "underFlow";
    else{
        delete this.storage[this.front];
        this.front++;
    }
}

queue.prototype.frontEle=function()    
{
    if(this.isEmpty())
    return "no element";
    return this.storage[this.front];
}

queue.prototype.isEmpty=function()    
{
    return this.rear-this.front+1==0;
}

queue.prototype.print=function()    
{
    var str="";
    for(var i=0;i<this.getSize();i++)
    str+=this.storage[i]+" ";
    console.log(str);
}

queue.prototype.getSize=function()    
{
    if(this.front==-1 && this.rear==-1)
        return this.rear-this.front;
    return this.rear-this.front+1;
}

module.exports=new  queue()