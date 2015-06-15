var React = require("react");
var MessageForm = require("./MessageForm");
var MessagesList = require("./MessagesList");

var Chat = React.createClass({displayName: "Chat",
	getInitialState: function() {
		return { messages: [] };
	},
	render: function() {
		return React.createElement("div", null, 
					React.createElement(MessagesList, {messages: this.state.messages}), 

					React.createElement(MessageForm, null)
				)
	}
});

module.exports = Chat;