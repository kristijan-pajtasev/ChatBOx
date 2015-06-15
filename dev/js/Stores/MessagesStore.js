var Emitter = require("../Emitter");

var MessagesStore = (function() {
	var messages = [];

	return {
		setMessages: function(data) { 
			messages = data;
			Emitter.emit("MESSAGES_RECEIVED");
		},
		get: function() {
			return messages;
		}
	}
}) ();

module.exports = MessagesStore;