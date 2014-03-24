var Iterator = require('../nodeasync.js').Iterator;

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

