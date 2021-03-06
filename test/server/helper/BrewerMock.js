'use strict';
module.exports = function (obj) {
  return {
    onTempUpdate: function (temp) {
      obj.temp = temp;
    },
    getActualBrew: function() {
      return {
        name: 'test'
      };
    },
    setBrew: function (name, phase, startTime) {
      obj.name = name;
      obj.phase = phase;
      obj.startTime = startTime;
    },
    cancelBrew: function () {
      obj.canceled = true;
    },
    setPaused: function () {
      obj.paused = true;
      return true;
    },
    emitBrewChanged: function () {
      obj.emitChanged = true;
    }
  };
};
