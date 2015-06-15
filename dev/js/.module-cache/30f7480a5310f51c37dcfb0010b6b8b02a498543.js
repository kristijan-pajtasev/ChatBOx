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
		}
	}
})();

module.exports = MessageActions;