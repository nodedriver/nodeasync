async eventemitter
=========

var EventEmitter = require('nodeasync').EventEmitter;


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



===============================================

var Iterator = require('nodeasync').Iterator;

var emails = ["a@a.com", "b@b.com"];

var emailIterator = new Iterator(emails, function (index, emailid, next) {
    //it will be called for each element in array
    //after doing some async work call next
    console.log(emailid)
    next();


});

emailIterator.iterate(function (err) {
    //it will be called after iterating each element
    console.log("complete")
})


