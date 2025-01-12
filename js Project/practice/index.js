Array.prototype.customForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
};

Array.prototype.foreachTwo = function (callback, thiscontext) {
  if (typeof callback !== "function") {
    throw "not a function";
  }
  const length = this.length;
  let i = 0;
  while (i < length) {
    if (this.hasOwnProperty) {
      callback.call(thiscontext, this[i], i, this);
    }
    i++;
  }
};
