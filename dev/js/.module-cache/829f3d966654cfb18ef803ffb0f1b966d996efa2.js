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
					console.log("success message")
				}
			})
		},
		get: function() {
			$.ajax({type: "get",
					url: "/messages"})
			.then(function(data) {
				if(data.status == "success") {
					console.log("success message")
					console.log(data.payload)
				}
			})
		}
	}
})();

module.exports = MessageActions;