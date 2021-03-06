var React = require("react");
var MessageForm = require("./MessageForm");
var MessagesList = require("./MessagesList");

var Chat = React.createClass({displayName: "Chat",
	render: function() {
		return React.createElement("div", null, 
					React.createElement(MessagesList, {messages: []}), 

					React.createElement(MessageForm, null)
				)
	}
});

module.exports = Chat;