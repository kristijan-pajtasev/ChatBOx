var React = require("react");
var MessageActions = require("./Actions/MessageActions");

var MessageForm = React.createClass({displayName: "MessageForm",
	sendMessage: function() {
		var message = this.refs.message.getDOMNode().value;
		this.refs.message.getDOMNode().value = "";
		MessageActions.send(this.props.username, message);
	},
	render: function() {
		return React.createElement("div", null, 
					React.createElement("textarea", {ref: "message"}
					), 
					React.createElement("button", {onClick: this.sendMessage}, "Send")
				)
	}
});

module.exports = MessageForm;