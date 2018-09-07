
    module.exports = class stack {
        constructor() 
    {
        this.braces = [];
    }
    push(element)
    {
    // push element into the items
    this.braces.push(element);
    }
    pop()
    {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.braces.length == 0)
        return "Underflow";
    return this.braces.pop();
    }
    peek()
    {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.braces[this.braces.length - 1];
    }
    // isEmpty function
    isEmpty()
    {
    // return true if stack is empty
    return this.braces.length == 0;
    }
    printStack()
    {
    var str = "";
    for (var i = 0; i < this.braces.length; i++)
        str += this.braces[i] + " ";
    return str;
    }


}
    