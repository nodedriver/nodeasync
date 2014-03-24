var EventEmitter = require('../nodeasync.js').EventEmitter;

var inherits = require('util').inherits;


var Data = function () {
    this.data = [];
}

inherits(Data, EventEmitter);

Data.prototype.addRow = function (row) {
    var that = this;
    that.emit("pre", row, that.data, function () {
        console.log("pre called")
        that.data.push(row);
        that.emit("post", that.data, function () {
            console.log("post called")
        })
    });
}


var data = new Data();
data.on("pre", function (row, data, next) {
    //do some async task here and then call next()
    next();

})

data.on("post", function (data, next) {
    //do some async task here and then call next()
    next();

})

data.addRow("one");





