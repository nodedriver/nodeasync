var Iterator = function (array, task) {
    this.array = array;
    this.task = task;
}

Iterator.prototype.iterate = function (callback) {

    try {
        var that = this;
        if (that.array && that.array.length > 0) {
            var index = -1;
            var arrayCallback = function (err, info) {
                try {
                    if (err) {
                        callback(err);
                        return;
                    }
                    index = index + 1;
                    if ((index == that.array.length)) {
                        callback(null);
                    } else {
                        try {
                            that.task(index, that.array[index], arrayCallback);
                        } catch (e) {
                            callback(e);
                            return;
                        }
                    }
                } catch (e) {
                    callback(e);
                }
            };
            arrayCallback();
        } else {
            callback();
        }
    } catch (e) {
        callback(e);
    }
}


module.exports = Iterator;