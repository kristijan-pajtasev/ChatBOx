var Emitter = require("../Emitter");

var LoginActions = (function() {
	return {
		login: function(username) {
			console.log("username: " + username)
			Emitter.emit("LOGIN", {username: username})
		}
	}
})();

module.exports = LoginActions; 