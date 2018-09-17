module.exports = class dequeue {
        constructor() {
            this.value = [];
        }
        // it returns true if the list is empty,otherwise it returns false
        isEmpty() {
            return !Boolean(this.value.length);
        }
        //adding the elements at front
        addFront(value) {
            this.value.unshift(value);
        }
        //adding the elements at last
        addRear(value) {
            this.value.push(value);
        }
        //removes the first element
        removeFront() {
            return this.value.shift();
        }
        //removes the last element
        removeRear() {
            return this.value.pop();
        }
        //returns the size of the dequeue
        size() {
            return this.value.length;
        }
    }
