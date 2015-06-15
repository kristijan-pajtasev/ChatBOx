var Emitter = (function() {
	var callbacks = {};

	return {
		on: function(type, callback) {
			if(!!callbacks[type]) {
				callbacks[type] = [];
			}
		}
	}
})();

module.exports = Emitter;