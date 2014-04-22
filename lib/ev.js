EV = function() {
  this._evHandlers = {};
}

EV.prototype.emit = function emit(event) {
  var args = Array.prototype.slice.call(arguments, 1);
  var emitted = false;

  if(this._evHandlers[event]) {
    var events = _.clone(this._evHandlers[event]);
    for(var lc=0; lc<events.length; lc++) {
      var handler = events[lc];
      handler.apply(this, args);
      emitted = true;
    }
  }

  if(event == 'error' && !emitted) {
    throw args[0];
  }
  return this;
};

EV.prototype.on = function on(event, callback) {
  if(!this._evHandlers[event]) {
    this._evHandlers[event] = [];
  }
  this._evHandlers[event].push(callback);
  return this;
};

EV.prototype.once = function once(event, callback) {
  this.on(event, function onetimeCallback() {
    callback.apply(this, arguments);
    this.removeListener(event, onetimeCallback);
  });
  return this;
};

EV.prototype.removeListener = function removeListener(event, callback) {
  if(this._evHandlers[event]) {
    var index = this._evHandlers[event].indexOf(callback);
    var removed = this._evHandlers[event].splice(index, 1);
  }
  return this;
};

EV.prototype.removeAllListeners = function removeAllListeners(event) {
  this._evHandlers[event] = undefined;
  return this;
};