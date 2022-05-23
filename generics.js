var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add('luis');
nameQueue.add('5');
var numberQueue = new Queue();
numberQueue.add(10);
// generics are placeholders for data types
function someFunction(paramOne) {
    console.log('paramOne', paramOne);
    return paramOne;
}
someFunction('John');
