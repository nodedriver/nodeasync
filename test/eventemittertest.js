var EventEmitter = require('../nodeasync.js').EventEmitter;


var myEmitter = new EventEmitter();
myEmitter.on("save", function (param1, param2, param3, next) {
    //do some async work here and call next
    console.log("param1>>>" + JSON.stringify(param1));
    next();
})


myEmitter.emit("save", {person:"A"}, function () {
    //it will be called after calling each on for save
    console.log("ok")
})