var Iterator = require("./iterator.js");

var EventEmitter = function () {
}


EventEmitter.prototype.on = function (event, listener) {
    this.listeners = this.listeners || {};
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(listener);
}

EventEmitter.prototype.emit = function () {

    var args = Array.prototype.slice.call(arguments, 0);
    var event = args[0];
    var lastArgument = args[args.length - 1];
    var callback = undefined;
    if (typeof lastArgument == "function") {
        callback = lastArgument;
        args.splice((args.length - 1), 1);
    }
    args.splice(0, 1);
    var listeners = this.listeners ? this.listeners[event] : undefined;
    if (listeners) {
        if (this.async) {

        } else {

        }
        var iterator = new Iterator(listeners, function (index, listener, next) {
            var arguments = listener.length;
            var newArguments = [];
            for (var i = 0; i < arguments - 1; i++) {
                newArguments.push(args[i]);
            }
            newArguments.push(next);
            listener.apply(null, newArguments);
        })
        iterator.iterate(function () {
            if (callback) {
                callback();
            }
        })
    }


}

module.exports = EventEmitter;