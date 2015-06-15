var Emitter = (function() {
	var callbacks = {};

	return {
		on: function(type, callback) {
			if(!callbacks[type]) {
				callbacks[type] = [];
			}
			callbacks[type].push({action: callback, isActive: true})
		},
		emit: function(type) {
			if(!callbacks[type]) {
				for(var i = 0, length = callbacks[type].length; i < length; i++) {
					if(callbacks[type][i].isActive) {
						callbacks[type][i]();
					}
				}
			}
		}
	}
})();

module.exports = Emitter;