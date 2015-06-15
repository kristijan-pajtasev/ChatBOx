var MessagesStore = require("../Stores/MessagesStore");

var MessageActions = (function() {
	return {
		send: function(sender, message) {
			$.ajax({type: "post", 
					data: {
						sender:sender,
						message: message
					}, 
					dataType: "json", 
					url: "/send"})
			.then(function(data) {
				if(data.status == "success") {
					
				}
			})
		},
		get: function() {
			$.ajax({type: "get",
					url: "/messages"})
			.then(function(data) {
				if(data.status == "success") {
					MessagesStore.setMessages(data.messages);
				}
			})
		}
	}
})();

module.exports = MessageActions;